import chai from 'chai';
import chaiHttp from 'chai-http';

import { getAllResumes } from '../../database'

let expect = chai.expect;

chai.use(chaiHttp);

describe('Test getAllResumes endpoint', function () {
    beforeEach(function () {
    });
    describe('Using valid request', function () {
        it('it should return 200 response', function (done) {
            chai.request("http://localhost:4000")
                .get("/api/getAllResumes")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        });
        it('it should return all resumes', async function () {
            let expected = await getAllResumes();
            let res  = await chai.request("http://localhost:4000")
                .get("/api/getAllResumes");
            expect(res.body).to.be.an('array');
            expect(JSON.stringify(res.body)).equal(JSON.stringify(expected));
        });
    });
});