'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const faker = require('faker');
const db = require('../models/index');
const Category = db.categories;
const { create, findAll } = require('../respositories/categoryRepository');

describe('Testing Category repository', () => {
    const createData = {
        uuid: faker.random.uuid(),
        name: faker.name.findName()
    };

    const findAllData = [
        {
            uuid: faker.random.uuid(),
            name: faker.name.findName()
        },
        {
            uuid: faker.random.uuid(),
            name: faker.name.findName()
        }
    ];

    it('Should create a category', async () => {
        const stub = sinon.stub(Category, 'create').resolves(createData);
        const category = await create(createData);
        expect(stub.calledOnce).to.be.true;
        expect(category.uuid).to.equal(createData.uuid);
        expect(category.name).to.equal(createData.name);

        stub.restore();
    });

    it('should list all categories', async () => {
        const stub = sinon.stub(Category, 'findAll').resolves(findAllData);
        const categories = await findAll(findAllData);
        expect(stub.calledOnce).to.be.true;
        expect(categories).to.be.length(2);
        expect(categories).to.eql(findAllData);
    })
});