import mongoose from 'mongoose';
import { filterByDate } from '../helper';

/**
 *  @brief API to return all power values filtered by date
 *  @returns void
 *  @param request  request from frontend
 *  @param response to frontend the sum as type number
 */
export async function getFullPowerByDate(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const filterProperty: string = request.query.filterProperty;
    const filteredByDate: mongoose.Document[] = await filterByDate(until, from, filterProperty);
    
    const sum: number = filteredByDate
        .map(turbine => {
            return Number(turbine.get("Leistung,N,13,3").replace(',', '.'))
        })
        .reduce((sum, current) => sum + current, 0);

    response.send({ sum });
}
