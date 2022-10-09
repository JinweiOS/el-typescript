// 此文件运行在 Node.js 服务器上
import { createSSRApp } from 'vue'
// Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
import { renderToString } from 'vue/server-renderer'

import Fastify from 'fastify'
const server = Fastify({
    logger: true
})

server.get('/', (req, res) => {
    const app = createSSRApp({
        data: () => ({ count: 1 }),
        template: `<button @click="count++">{{ count }}</button>`
    })

    // app.$mount('#app')
    // createApp

    renderToString(app).then((html) => {
        res.header('Content-Type', 'text/html; charset=utf-8').send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vue SSR Example</title>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
      `)
    })
})

async function fatisfyMain() {
    await server.listen({
        port: 3000,
        host: '127.0.0.1',
    })
    console.log('server is listening on 127.0.0.1:3000')
}
fatisfyMain()


