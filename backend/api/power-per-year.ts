import mongoose from 'mongoose';
import { filterByDate, convertToDate } from '../helper';

/**
 *  @brief API to return power and date of years
 *  @returns void
 *  @param request  request from frontend
 *  @param response returns an array 
*/
export async function getPowerPerYears(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const filterProperty: string = request.query.filterProperty;

    const years: any[] = [];
    for (let index: number = from.getFullYear(); index < until.getFullYear() + 1; index++) {
        years.push({ 'year': index, 'power': 0 });
    }

    const filteredByDate: mongoose.Document[] = await filterByDate(until, from, filterProperty);

    filteredByDate.forEach(turbine => {
        const power = Number(turbine.get("Leistung,N,13,3").replace(',', '.'));
        const dateString: string = turbine.get(filterProperty);
        const date: Date = convertToDate(dateString);
        const year: number = date.getFullYear();
        const actualYear = years.find(entry => year === entry.year);
        actualYear.power += power;
    });

    years.forEach(entry => {
        entry.change = entry.power;
        const actualYear = entry.year;
        const entryBefore = years.find(e => e.year === (actualYear - 1));
        const powerOfYearBefore = entryBefore?.power ? entryBefore.power : 0;

        return entry.power += powerOfYearBefore;
    });
    response.send(years);
}