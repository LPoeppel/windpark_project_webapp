import mongoose from 'mongoose';
import { filterByDate } from '../helper';

/**
 *  @brief API to filter the turbines for the map view
 *  @returns void
 *  @param request  request from frontend+
 *  @param response to frontend a mongoose.Document[]
 */
export async function getTurbinesByDate(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const filterProperty: string = request.query.filterProperty;
    const filteredByDate: mongoose.Document[] = await filterByDate(until, from, filterProperty);
    response.send(filteredByDate);
}