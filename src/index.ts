// import fs from 'fs/promises'
// import path from 'path'
import wx from 'wx'

// async function main() {
//     const data = await fs.readFile(path.join(__dirname, '../package.json'));
//     console.log(data.toString('utf8'))
// }

// main()

// import koa from 'koa'

// const server = new koa();

// server.use((context) => {
//     context.body = 'hello'
// });

// server.listen(3000, () => { console.log('server is listening on port 3000!') })


import Fastify from 'fastify'

const server = Fastify({
    logger: true
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

console.log(wx.getMsg('1234'))



