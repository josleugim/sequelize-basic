'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const { create, findAll } = require('../respositories/expenseRepository');
const db = require('../models/index');
const Expense = db.expenses;
const faker = require('faker');

describe('Testing Expense repositories', () => {
    const createData = {
        uuid: faker.random.uuid(),
        ConceptUuid: faker.random.uuid(),
        amount: faker.finance.amount,
        note: faker.lorem.paragraph,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past()
    };

    const expensesData = [
        {
            uuid: faker.random.uuid(),
            ConceptUuid: faker.random.uuid(),
            amount: faker.finance.amount,
            note: faker.lorem.paragraph,
            updatedAt: faker.date.past(),
            createdAt: faker.date.past()
        },
        {
            uuid: faker.random.uuid(),
            ConceptUuid: faker.random.uuid(),
            amount: faker.finance.amount,
            note: faker.lorem.paragraph,
            updatedAt: faker.date.past(),
            createdAt: faker.date.past()
        }
    ]

    it ('Should create a expense', async () => {
        const stub = sinon.stub(Expense, 'create').resolves(createData);
        const expense = await create(createData);
        expect(stub.calledOnce).to.be.true;
        expect(expense.ConceptUuid).to.equal(createData.ConceptUuid);
        expect(expense.uuid).to.equal(createData.uuid);
        expect(expense.amount).to.equal(createData.amount);
        expect(expense.note).to.equal(createData.note);
        expect(expense.createdAt).to.equal(createData.createdAt);
        expect(expense.updatedAt).to.equal(createData.updatedAt);

        stub.restore();
    });

    it ('Should list all the expenses', async () => {
        const stub = sinon.stub(Expense, 'findAll').resolves(expensesData);
        const expenses = await findAll(expensesData);
        expect(stub.calledOnce).to.be.true;
        expect(expenses).to.be.length(2);
        expect(expenses).to.eql(expensesData);
    })
})