import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';

var app = require('../server');


it('should respond with the number of db entries', function (done) {
	request(app)
		.get('/teamtrivial/api/count')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function (err: any, res: any) {
			expect(err).to.not.exist;
			res.should.have.status(200);
			res.body.should.be.above(4600);

			done();
		});
});