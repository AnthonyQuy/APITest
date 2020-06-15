import chai from 'chai';
import chaiHttp from 'chai-http';

import { getAllResumes } from '../../database'

let expect = chai.expect;

chai.use(chaiHttp);

describe('Test getAllResumes endpoint serial', function () {
    beforeEach(function () {
    });
    test('Using valid request', async function () {
        let res = await chai.request("http://localhost:4000")
            .get("/api/getAllResumes");
        expect(res).to.have.status(200);
    })
    test('it should return all resumes', async function () {
        let expected = await getAllResumes();
        let res = await chai.request("http://localhost:4000")
            .get("/api/getAllResumes");
        expect(res.body).to.be.an('array');
        expect(JSON.stringify(res.body)).equal(JSON.stringify(expected));
    });
    test('it should return all resumes2', async function () {
        let expected = await getAllResumes();
        let res = await chai.request("http://localhost:4000")
            .get("/api/getAllResumes");
        expect(res.body).to.be.an('array');
        expect(JSON.stringify(res.body)).equal(JSON.stringify(expected));
    });
    test('it should return all resumes3', async function () {
        let expected = await getAllResumes();
        let res = await chai.request("http://localhost:4000")
            .get("/api/getAllResumes");
        expect(res.body).to.be.an('array');
        expect(JSON.stringify(res.body)).equal(JSON.stringify(expected));
    });
    test('it should return all resumes4', async function () {
        let expected = await getAllResumes();
        let res = await chai.request("http://localhost:4000")
            .get("/api/getAllResumes");
        expect(res.body).to.be.an('array');
        expect(JSON.stringify(res.body)).equal(JSON.stringify(expected));
    });
    test('it should return all resumes5', async function () {
        let expected = await getAllResumes();
        let res = await chai.request("http://localhost:4000")
            .get("/api/getAllResumes");
        expect(res.body).to.be.an('array');
        expect(JSON.stringify(res.body)).equal(JSON.stringify(expected));
    });
});

