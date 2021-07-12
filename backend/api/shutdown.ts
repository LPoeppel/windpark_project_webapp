import express from "express"
import { databaseConnection, server } from "../server";
import basicAuth from 'express-basic-auth';
/**
*  @brief API to shutdown the server with authentication
*  @returns void
*  @param request  
*  @param response 
*/
export async function shutdownServer(request: express.Request, response: express.Response): Promise<void> {
    console.info('Server recieved shutdown command');
    response.send('Server has been shut down by user');
    databaseConnection.close(false);
    console.info('Database disconnected');
    server.close();
    console.info('Server disconnected');
}
