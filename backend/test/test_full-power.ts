import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';

var app = require('../server');

it('should respond with the power of all wka in a given timeframe (2010-01-01 to 2020-01-01)', function (done) {
	request(app)
		.get('/teamtrivial/api/full-power?until=2020-01-01&from=2010-01-01&filterProperty=Genehmigt,D')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);
			res.body.should.not.be.NaN();
			done();
		});
});