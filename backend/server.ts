import express from "express";
import mongoose from 'mongoose';
import basicAuth from 'express-basic-auth';
import { getPower } from "./api/power";
import { shutdownServer } from "./api/shutdown";
import { initMongoDbConnection } from './database';
import { getTurbinesByDate } from "./api/turbines";
import { getFullPowerByDate } from "./api/full-power";
import { getPowerPerYears } from "./api/power-per-year";
import { getHubsAndRotorsByDate } from "./api/hub-rotor";
import { getCountOfAllTurbines } from "./api/count-turbines";
import { getPowerPerAreaCodes } from "./api/power-per-area-code";
import { getAverageBuiltDuration } from "./api/average-built-duration";
import { getApprovedBuiltDifference } from "./api/approved-built-difference";
import { shutdownCredentials } from "./credentials";

//mongoDB
export const databaseConnection: mongoose.Connection = initMongoDbConnection();

//express
export const app: express.Application = express();
const expressPort: number = 8035;
const pathForExpressFiles: string = '/dist/';

export const server = app.listen(expressPort, function () {
    app.use('/teamtrivial', express.static(__dirname + pathForExpressFiles));
    console.log(`hosted -->  http://localhost:${expressPort}/teamtrivial`
    )
});

//APIs
app.get('/teamtrivial/api/power', getPower);
app.get('/teamtrivial/api/turbines', getTurbinesByDate);
app.get('/teamtrivial/api/count', getCountOfAllTurbines);
app.get('/teamtrivial/api/full-power', getFullPowerByDate);
app.get('/teamtrivial/api/power-per-year', getPowerPerYears);
app.get('/teamtrivial/api/hub-rotor', getHubsAndRotorsByDate);
app.get('/teamtrivial/api/power-per-area-code', getPowerPerAreaCodes);
app.get('/teamtrivial/api/approved-built-difference', getApprovedBuiltDifference);
app.get('/teamtrivial/api/average-built-duration', getAverageBuiltDuration);
app.get('/teamtrivial/api/shutdown', basicAuth(shutdownCredentials), shutdownServer);

//export app (express server) to test enviroment
module.exports = server; 