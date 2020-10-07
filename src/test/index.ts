/*
    Developer: Sterling Michel
    emailAddress: smichel@5searches.com
    CreatedDate: Oct 7th, 2020
    License: MIT
*/

import ParseVersionOne from '../routes/v1/parse';
import ParseVersionTwo from '../routes/v2/parse';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Run test suite', () => {
    const testInput = {
        "data": "JOHN0000MICHAEL0009994567"
    };

    describe('test rest api endpoint', () => {
        describe('/POST parse', () => {
            it('it should GET all the books', (done) => {
                chai.request(server)
                    .get('/api/v1/parse')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('json');
                        res.body.length.should.be.eql({
                            firstName: "JOHN0000",
                            lastName: "MICHAEL000",
                            clientId: "9994567"
                        });
                        done();
                    });
            });

            it('it should GET all the books', (done) => {
                chai.request(server)
                    .get('/api/v2/parse')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('json');
                        res.body.length.should.be.eql({
                            firstName: "JOHN",
                            lastName: "MICHAEL",
                            clientId: "999-4567"
                        });
                        done();
                    });
            });
        });
    });


    describe('test rest api method', () => {
        const parseV1 = new ParseVersionOne();
        const parseV2 = new ParseVersionTwo();

        it('pull firstName, lastName, and clientID v1', () => {
            const outResult = parseV1.run(testInput)
            expect(outResult).toEqual({
                firstName: "JOHN0000",
                lastName: "MICHAEL000",
                clientId: "9994567"
            });
        })

        it('text extract name, version 2', () => {
            const outResult = parseV2.run(testInput)
            expect(outResult).toEqual({
                firstName: "JOHN",
                lastName: "MICHAEL",
                clientId: "999-4567"
            })
        })
    })

})