import chai from 'chai';
import chaiHttp from 'chai-http';

import { getResumeById } from '../../database'

let expect = chai.expect;

chai.use(chaiHttp);

describe('Test getResumeById endpoint', function () {
    beforeEach(function () {
    });
    describe('Using valid id',  function () {
        it('it should return matched resume', async function () {
            let expected = await getResumeById("5ed1e1210d7f970da7e975ce");
            chai.request("http://localhost:4000")
                .get("/api/getResumeById/5ed1e1210d7f970da7e975ce")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body.name).equal(expected.name);
                })
        });
    });
});