// test/test.js

const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);


const app = require('../index');

const should = chai.should();

chai.use(chaiHttp);


describe('GET /', () => {
    it('expect return status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
