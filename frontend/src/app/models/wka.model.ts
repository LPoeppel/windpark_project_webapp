export interface wka {
    'Bst_Name,C,120': string;
    'PLZ,C,5': number;
    'Ort,C,254': string;
    'Anl_Nr,C,9': string;
    'Leistung,N,13,3' : number;
    'Status,C,20': string;
    'Genehmigt,D': string;
    'Inbetriebn,D': string;
    'Anl_Bez,C,60': string;
    'Bst_Nr,C,11': string;
    'Kreis,C,40' :string;
    'Geme_Kenn,C,':string;
    'Nabenhoehe,N,11,2': string;
    'Rotordurch,N,11,2': string;
    'Wka_ID,C,15': string;
    'Latitude': number;
    'Longitude': number;
    }

export interface markers{
    position: string;
    'Longitude': number;
}

export interface Location {
    position: google.maps.LatLng;
    title: string;
    label: string;
}

export interface marker {
	lat: number;
    lng: number;
    wkainfo: string;
    betreiber: string;
    address: string; 
    draggable: boolean;
    visible: boolean;
    name: string;
    status: string;
    leistung: number; 
}