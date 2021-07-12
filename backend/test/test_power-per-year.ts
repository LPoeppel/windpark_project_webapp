import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';

var app = require('../server');


it('should respond with a json wit three properties, "year", "power", "change" for a given timeframe (2010-01-01 to 2020-01-01)', function (done) {
	request(app)
		.get('/teamtrivial/api/power-per-year?until=2020-01-01&from=2010-01-01&filterProperty=Genehmigt,D')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);
			for(let i of res.body) {
				i.should.have.properties(
					"year", "power", "change"
				);
			}
			done();
		});
});