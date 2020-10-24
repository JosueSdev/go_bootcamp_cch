const supertest = require('supertest')

const indexHandlers = require('../routes/index/handlers')
const app = require('../app')

const request = supertest(app)

describe('GET /', () => {
    it('intends to say hello', () => {
        const intent = indexHandlers.getIndex()

        expect(intent.json)
            .toStrictEqual({
                message: 'Hello World!',
            })
    })

    it('answers hello', async (done) => {
        const response = await request
            .get('/')
        
        expect(response.status).toStrictEqual(200)
        expect(response.body.message).toStrictEqual('Hello World!')
        done()
    })
})