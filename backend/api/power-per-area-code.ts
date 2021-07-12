import mongoose from 'mongoose';
import { getAllAreaCodes, filterByDate } from '../helper';

/**
 *  @brief API to return an array with area codes an power
 *  @returns void
 *  @param request  request from frontend
 *  @param response returns a array to frontend
*/
export async function getPowerPerAreaCodes(request: any, response: any): Promise<void> {
    const from: Date = new Date(request.query.from);
    const until: Date = new Date(request.query.until);
    const filterProperty: string = request.query.filterProperty;

    const filteredByDate: mongoose.Document[] = await filterByDate(until, from, filterProperty);
    const areaCodes: string[] = await getAllAreaCodes();

    const powerPerAreaCode: any[] = areaCodes.map(plz => {
        const filtered = filteredByDate.filter(turbine => {
            return String(turbine.get('PLZ,C,5')) === String(plz)
        });
        const toPower = filtered.map(turbine => Number(turbine.get('Leistung,N,13,3').replace(',', '.')));
        const toArea = filtered.map(turbine => String(turbine.get('Ort,C,254')));
        const area = toArea.filter((uniqueTown, indexOfTowns) => toArea.indexOf(uniqueTown) === indexOfTowns);
        const power = toPower.reduce((sum, current) => sum + current, 0);
        const result = { plz, power, area }
        return result;
    });
    powerPerAreaCode.sort((a, b) => (b.power > a.power) ? 1 : ((a.power > b.power) ? -1 : 0));

    response.send(powerPerAreaCode);
}