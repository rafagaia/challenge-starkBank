require('dotenv').config();
const request = require('supertest');
const app = require('../app');

const invoicePaidJson = require('./mocks/invoice_paid.json');
const transferSuccessJson = require('./mocks/transfer_success.json');

describe('Invoices Webhook', () => {
    invoicePaidJson["event"]["workspaceId"] = process.env.WORKSPACE_ID;
    transferSuccessJson["event"]["workspaceId"] = process.env.WORKSPACE_ID;
    
    describe('Test POST /webhook/invoices', () => {

        test('Valid Invoice: Should respond w/ status 200 OK.', async () => {
            const response = await request(app)
                .post('/webhook/invoices')
                .send(invoicePaidJson)
                .expect('Content-Type', /json/)
                .expect(200);
        });

        test('Bad workspaceId: should respond w/ status 400 Bad Request.', async () => {
            let invoiceBadWorkspaceIdJson = invoicePaidJson;
            invoiceBadWorkspaceIdJson["event"]["workspaceId"] = '524589794';
            const response = await request(app)
                .post('/webhook/invoices')
                .send(invoiceBadWorkspaceIdJson)
                .expect('Content-Type', /json/)
                .expect(400);
        });

        test('Not an event subscription type invoice: should respond w/ status 405 Method not allowed.', async () => {
            const response = await request(app)
                .post('/webhook/invoices')
                .send(transferSuccessJson)
                .expect('Content-Type', /json/)
                .expect(405);
        });

    });
});