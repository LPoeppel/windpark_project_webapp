import mongoose from 'mongoose';
import { convertToDate } from "../helper";
import { findAllDocuments } from '../helper';

/**
 *  @brief API to return build time
 *  @returns void
 *  @param request  request from frontend
 *  @param response returns a NUMBER to frontend 
 */
export async function getApprovedBuiltDifference(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const allDocs = await findAllDocuments();

    const filteredByTimeInterval: mongoose.Document[] = allDocs
        .filter(turbine => {
            const approved = convertToDate(turbine.get("Genehmigt,D"));
            const activated = convertToDate(turbine.get("Inbetriebn,D"));

            return from <= approved && activated <= until;
        });

    const diffInDays: number[] = filteredByTimeInterval
        .map(turbine => {
            const approved: Date = convertToDate(turbine.get("Genehmigt,D"));
            const activated: Date = convertToDate(turbine.get("Inbetriebn,D"));
            const diff: number = activated.getTime() - approved.getTime();
            return Math.ceil(diff / (1000 * 3600 * 24));
        })
        .filter(diff => diff > 0);

    response.send(diffInDays);
}