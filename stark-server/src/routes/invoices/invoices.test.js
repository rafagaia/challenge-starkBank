const request = require('supertest');
const app = require('../../app');


describe('Invoices API', () => {
    describe('Test POST /invoices', () => {
        test('It should respond with status 202 Accepted.', async () => {
            const response = await request(app)
                .post('/webhook/invoices')
                .expect('Content-Type', /json/)
                .expect(202);
        });
    });
});