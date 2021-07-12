import mongoose from 'mongoose';
import { fullConnectionString, options } from './credentials'

/**
 *  @brief function to establish the data base connection
 *  @returns void
 */
export function initMongoDbConnection(): mongoose.Connection {
    mongoose.connect(fullConnectionString, options);
    const databaseConnection = mongoose.connection;
    databaseConnection.on('error', console.error.bind(console, 'Connection error:'));
    databaseConnection.once('open', function () {
        console.log("Connected to database");
    });
    return databaseConnection;
}
