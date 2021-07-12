import mongoose from 'mongoose';
import { filterByDate } from "../helper";

/**
 *  @brief API to return all hub heights and rotor diameters
 *  @returns void
 *  @param request  request from frontend
 *  @param response returns an array 
 */
export async function getHubsAndRotorsByDate(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const filterProperty: string = request.query.filterProperty;
    const filteredByDate: mongoose.Document[] = await filterByDate(until, from, filterProperty);
    const result: any[] = filteredByDate.map(turbine => {
        const hub: number = Number(turbine.get("Nabenhoehe,N,11,2").replace(',', '.'));
        const rotor: number = Number(turbine.get("Rotordurch,N,11,2").replace(',', '.'));
        return { hub, rotor };
    });
    const filteredResultAboveZero: any[] = result.filter((tupleValue) => {
        return tupleValue['hub'] && tupleValue['rotor'] > 0;
    });

    response.send(filteredResultAboveZero);
}