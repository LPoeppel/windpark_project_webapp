import 'should';
import 'should-http';
import { expect } from 'chai';
import request from 'supertest';

var app = require('../server');

it('should not be authenticated', function (done) {
	request(app)
		.get('/teamtrivial/api/shutdown')
		.auth('gunther','heinemann')
		.expect(401, done)
});

it('should run shutdown', function (done) {
	request(app)
		.get('/teamtrivial/api/shutdown')
		.auth('typ', 'eins')
		.expect(200, done);
});