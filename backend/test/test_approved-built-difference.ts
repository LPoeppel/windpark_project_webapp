import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';
var app = require('../server');


it('should respond with a collection of numbers > 0 for a given timeframe (2010-01-01 to 2020-01-01)', function (done) {
	request(app)
		.get('/teamtrivial/api/approved-built-difference?until=2020-01-01&from=2010-01-01&filterProperty=Genehmigt,D')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);
			for(let i of res.body) {
				i.should.not.be.NaN();
				i.should.be.above(0);
			}
			done();
		});
});