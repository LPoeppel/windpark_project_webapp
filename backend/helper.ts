import { Document } from 'mongoose';
import { WKA } from "./db-models/wka-model";

/**
 *  @brief helper function to convert the date string to a Date Object
 *  @returns Date
 *  @param dateString from type string
 */
export function convertToDate(dateString: string): Date {
    const parts: string[] = dateString.split('.');
    const day: string = parts[0];
    const month: string = parts[1];
    const year: string = parts[2];
    return new Date(year + "-" + month + "-" + day);
}

/**
 *  @brief function to filter for turbines by date 
 *  @returns void
 *  @param until the date request from frontend
 *  @param from the date request from frontend
 *  @param filterProperty the filter property request from frontend
 */
export async function filterByDate(until: Date, from: Date, filterProperty: string): Promise<Document[]> {

    const allTurbines = await WKA.find({}).exec();
    const turbinesInInterval: Document[] = allTurbines.filter(turbine => {
        const dateString: string = turbine.get(filterProperty);
        const date: Date = convertToDate(dateString);
        return date >= from && date <= until;
    });
    //console.log('Turbines matched date: ', turbinesInInterval.length);
    return turbinesInInterval;
}

/**
 *  @brief helper function to get all Area codes from database
 *  @returns getAllAreaCodes array of strings
 */
export async function getAllAreaCodes(): Promise<string[]> {
    const getAllAreaCodes: string[] = await WKA.distinct('PLZ,C,5').exec();

    return getAllAreaCodes.map(entry => String(entry));
}

/**
 *  @brief helper function which gets all documents from datebase
 *  @returns Document
 */
export async function findAllDocuments(): Promise<Document[]> {
    return await WKA.find({}).exec();
}