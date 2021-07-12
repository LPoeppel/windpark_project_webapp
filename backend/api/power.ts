import express from "express"
import { WKA } from "../db-models/wka-model";

/**
 *  @brief API to return the full collection
 *  @returns void
 *  @param request  request from frontend
 *  @param response to frontend as type Document
 */
export async function getPower(request: express.Request, response: express.Response): Promise<void> {
    console.log('Getting WKA collection from database');
    const wka = await WKA.find({}).exec();
    response.send(wka);
}