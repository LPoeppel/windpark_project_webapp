import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';
import '../db-models/wka-model';
import { WKA } from '../db-models/wka-model';

var app = require('../server');


it('should respond with full wka collection json with specified properties per object', function (done) {
	request(app)
		.get('/teamtrivial/api/power')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);
			res.should.be.json();
			for (let i of res.body) {
				i.should.have.properties(
					"_id",
					"Betreiber,C,120",
					"Bst_Nr,C,11",
					"Bst_Name,C,120",
					"Ort,C,254",
					"Ortsteil,C,254",
					"Anl_Nr,C,9",
					"Anl_Bez,C,60",
					"Genehmigt,D",
					"Ostwert,N,8,0",
					"Nordwert,N,7,0",
					"Latitude",
					"Longitude",
					"Kreis,C,40",
					"Geme_Kenn,C,8",
					"PLZ,C,5",
					"Inbetriebn,D",
					"Alt_an_anz,D",
					"Leistung,N,13,3",
					"Status,C,20",
					"Nabenhoehe,N,11,2",
					"Rotordurch,N,11,2",
					"LW_TAG,N,11,2",
					"LW_Nacht,N,11,2",
					"Stand_Abw,N,11,2",
					"Wka_ID,C,15");
			}
			done();
		});
});