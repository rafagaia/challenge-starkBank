require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const paidInvoiceJson = require('./mocks/paid_invoice.json');


describe('Invoices Webhook', () => {

    describe('Test POST /webhook/invoices', () => {

        test('It should respond with status 200 OK.', async () => {
            const response = await request(app)
                .post('/webhook/invoices')
                .send(paidInvoiceJson)
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });
});