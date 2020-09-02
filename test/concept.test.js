'use strict';

const sinon = require('sinon');
const { expect, should } = require('chai');
const { create, findAll } = require('../respositories/conceptRespository');
const { findAllCtrl } = require('../controllers/conceptCtrl');
const faker = require('faker');
const db = require('../models/index');
const Concept = db.concepts;

describe('Testing Concept repository', () => {
    const createData = {
        uuid: faker.random.uuid(),
        name: faker.name.findName(),
        description: faker.company.catchPhraseDescriptor(),
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),

    }

    const findAllData = [
        {
            uuid: faker.random.uuid(),
            name: faker.name.findName(),
            description: faker.company.catchPhraseDescriptor(),
            updatedAt: faker.date.past(),
            createdAt: faker.date.past()
        },
        {
            uuid: faker.random.uuid(),
            name: faker.name.findName(),
            description: faker.company.catchPhraseDescriptor(),
            updatedAt: faker.date.past(),
            createdAt: faker.date.past()
        }
    ]

    it ('Should create a concept', async () => {
        const stub = sinon.stub(Concept, 'create').resolves(createData);
        const concept = await create(createData);
        expect(stub.calledOnce).to.be.true;
        expect(concept.name).to.equal(createData.name);
        expect(concept.description).to.equal(createData.description);
        expect(concept.createdAt).to.equal(createData.createdAt);
        expect(concept.updatedAt).to.equal(createData.updatedAt);

        stub.restore()
    })

    it ('Should list all the concepts', async () => {
        const stub = sinon.stub(Concept, 'findAll').resolves(findAllData);
        const concepts = await findAll(findAllData);
        expect(stub.calledOnce).to.be.true;
        expect(concepts).to.be.length(2);
    })
});

describe('Testing controllers', () => {
    let req = {};
    let res;
    let status;
    let json;

    beforeEach(() => {
        status = sinon.stub();
        json = sinon.spy();
        res = { json, status };
        status.returns(res);
    });

    it('Should return all concepts', () => {


        findAllCtrl(req, res);
        console.log(res.status())
        expect(res.status.calledOnce).to.be.true;
    })
})