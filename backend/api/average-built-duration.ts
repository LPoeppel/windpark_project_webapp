import mongoose from 'mongoose';
import { convertToDate, findAllDocuments } from "../helper";

/**
 *  @brief API to return the average construction time of the wind turbines
 *  @returns void
 *  @param request  request from frontend with from and until Date, moreover witch amount of X-Axis values
 *  @param response to frontend a JSON with the average built duration
 */
export async function getAverageBuiltDuration(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const amount: number = request.query.amount || 10;


    const allDocs = await findAllDocuments();
    const filteredByTimeInterval: mongoose.Document[] = allDocs
        .filter(turbine => {
            const approved = convertToDate(turbine.get("Genehmigt,D"));
            const activated = convertToDate(turbine.get("Inbetriebn,D"));

            return from <= approved && activated <= until;
        });


    let timeSpans: any[] = filteredByTimeInterval
        .map(turbine => {
            const approved: Date = convertToDate(turbine.get("Genehmigt,D"));
            const activated: Date = convertToDate(turbine.get("Inbetriebn,D"));
            const diff: number = activated.getTime() - approved.getTime();
            const diffInDays: number = Math.ceil(diff / (1000 * 3600 * 24));
            return { approved, activated, diffInDays };
        })
        .filter(timeSpan => timeSpan.diffInDays > 0);


    const bucketDuration: number = (until.getTime() - from.getTime()) / amount;
    const result: any[] = [];
    for (let index = 1; index <= amount; index++) {
        const currentDate: Date = new Date(from.getTime() + bucketDuration * index);

        const filteredSpans: any[] = timeSpans.filter(timeSpan => {

            return currentDate.getTime() >= timeSpan.activated.getTime();
        });

        const sum: number = filteredSpans.reduce((sum, current) => sum + current.diffInDays, 0);
        const average: number = (sum / filteredSpans.length) || 0;

        result.push({ currentDate, average });
        timeSpans = timeSpans.filter(span => {
            return !(filteredSpans.includes(span));
        })
    }

    response.send(result);
}
