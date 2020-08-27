'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const { create, findAll } = require('../respositories/conceptRespository');
const faker = require('faker');
const db = require('../models/index');
const Concept = db.concepts;

describe('Testing Concept CRUD', () => {
    const createData = {
        uuid: faker.random.uuid(),
        name: faker.name.findName(),
        description: faker.company.catchPhraseDescriptor(),
        updatedAt: faker.date.past(),
        createdAt: faker.date.past()
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
})