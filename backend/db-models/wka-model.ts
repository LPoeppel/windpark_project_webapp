
import * as mongoose from 'mongoose';

/**
 *  @brief Schema of the collection WKA
 *  every property from WKA is a "String"
 *  to work with the inconsistent data types from the db
 */
const wkaSchema = new mongoose.Schema({
    
    "Betreiber,C,120" : String, 
    "Bst_Nr,C,11" :String, 
    "Bst_Name,C,120" : String, 
    "Ort,C,254" : String, 
    "Ortsteil,C,254" : String, 
    "Anl_Nr,C,9" : String, 
    "Anl_Bez,C,60" : String, 
    "Genehmigt,D" : String,
    "Ostwert,N,8,0" :String, 
    "Nordwert,N,7,0" : String, 
    "Latitude" : String, 
    "Longitude" : String, 
    "Kreis,C,40" : String, 
    "Geme_Kenn,C,8" :String, 
    "PLZ,C,5" : String, 
    "Inbetriebn,D" : String, 
    "Alt_an_anz,D" : String, 
    "Leistung,N,13,3" : String, 
    "Status,C,20" : String, 
    "Nabenhoehe,N,11,2" :String, 
    "Rotordurch,N,11,2" :String, 
    "LW_TAG,N,11,2" : String, 
    "LW_Nacht,N,11,2" : String, 
    "Stand_Abw,N,11,2" : String, 
    "Wka_ID,C,15" : String,
    },
    { collection : 'wka' }
  );

//export model
export const WKA = mongoose.model('Wka', wkaSchema);
