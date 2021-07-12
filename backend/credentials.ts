//mongoose DB credentials
require('dotenv').config();
const protocol: string = 'mongodb';
const username: any = process.env.USR_DB;
const password: any = process.env.PSW_DB;
const url: string = 'www.robert-magnus.de';
//const url: string = 'localhost';
const portMongoose: string = '27017';
const database: string = 'wka';
const authentification = 'authSource=wka';
export const fullConnectionString: string =
    `${protocol}://${username}:${password}@${url}:${portMongoose}/${database}?${authentification}`;
export const options = { useNewUrlParser: true, useUnifiedTopology: true };
export const shutdownCredentials = { users: { 'typ': 'eins' }, challenge: true };

