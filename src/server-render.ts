import Fastify from 'fastify'
import FastView from '@fastify/view'
import Ejs from 'ejs'

const server = Fastify({
    logger: true
})

server.register(FastView, {
    engine: {
        ejs: Ejs
    }
})

server.get('/', (res, rep) => {
    rep.view('template/index.ejs', {text: '尝试一下远古时代'})
})

server.get('/hello', (res, rep) => {
    rep.send('hello fastify')
})

async function fatisfyMain() {
    await server.listen({
        port: 3000,
        host: '127.0.0.1',
    })
    console.log('server is listening on 127.0.0.1:3000')
}
fatisfyMain()