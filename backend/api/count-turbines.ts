import express from "express"
import { WKA } from "../db-models/wka-model";

/**
 *  @brief API to count documents in DB without any conditions
 *  @returns void
 *  @param request  request from frontend
 *  @param response to frontend
 */
export async function getCountOfAllTurbines(request: express.Request, response: express.Response): Promise<void> {
    console.log('Counting the items in collection');
    const count = await WKA.estimatedDocumentCount().exec();
    response.json(count);
}
