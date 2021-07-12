import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';
var app = require('../server');


it('should return success (200) and should have property average', function (done) {
	request(app)
		.get('/teamtrivial/api/average-built-duration?until=2020-01-01&from=2010-01-01&amount=10')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);
			for (let i of res.body) {
				i.should.have.properties(
					"average"
				);
				i["average"].should.be.aboveOrEqual(0);
			}
			done();

		});
});

it('should return success (200) without amount', function (done) {
	request(app)
		.get('/teamtrivial/api/average-built-duration?until=2020-01-01&from=2010-01-01')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);			
			for (let i of res.body) {
				i.should.have.properties(
					"average"
				);
				i["average"].should.be.aboveOrEqual(0);
			}
			done();

		});
});

it('should return 0 for average amount', function (done) {
	request(app)
		.get('/teamtrivial/api/average-built-duration?until=2020-01-01&from=2020-01-01')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);			
			for (let i of res.body) {
				i.should.have.properties(
					"average"
				);
				i["average"].should.be.aboveOrEqual(0);
			}
			done();

		});
});