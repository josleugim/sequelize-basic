'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const should = require('chai').should();
const { create, findAll } = require('../respositories/conceptRespository');
const { findAllCtrl } = require('../controllers/conceptCtrl');
const faker = require('faker');
const db = require('../models/index');
const Concept = db.concepts;

describe('Testing Concept repository', () => {
    const createData = {
        CategoryUuid: faker.random.uuid(),
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
            createdAt: faker.date.past(),
            CategoryUuid: faker.random.uuid(),
        },
        {
            uuid: faker.random.uuid(),
            name: faker.name.findName(),
            description: faker.company.catchPhraseDescriptor(),
            updatedAt: faker.date.past(),
            createdAt: faker.date.past(),
            CategoryUuid: faker.random.uuid(),
        }
    ]

    it ('Should create a concept', async () => {
        const stub = sinon.stub(Concept, 'create').resolves(createData);
        const concept = await create(createData);
        expect(stub.calledOnce).to.be.true;
        expect(concept.CategoryUuid).to.equal(createData.CategoryUuid);
        expect(concept.uuid).to.equal(createData.uuid);
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
        expect(concepts).to.eql(findAllData);
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
})