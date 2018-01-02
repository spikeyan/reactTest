/**
 * Created by spikeyan on 2017/12/25.
 */
const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const proxy = require('koa-proxy')

const app = new Koa();
const router = new Router();
const server = require('http').createServer(app.callback());

// var io = require('socket.io')(server);
// io.on('connection', function(client){
//     console.log('connected')
//     client.on('event', function(data){
//         console.log(data)
//     });
//     client.on('disconnect', function(){});
//     client.on('message',(c)=>{
//         console.log(c)
//     client.emit('message','i receied')
// })
//     setInterval(()=>{
//         client.emit(new Date())
// },1000)
// });

router
    .use(BodyParser())
    .get('/', (ctx, next) => {
    ctx.body = ctx
})
.post('/',(ctx)=>{
    ctx.body = ctx.request.body
})

app
// .use(proxy({
//     host:'https://www.baidu.com/',
//     jar: true,
//     match:/s/
// }))
    .use(serve('./www'))
    .use(router.routes())
    .use(router.allowedMethods())
// .listen(8088)

server.listen(8088)

// const WebSocket = require('ws');
//
// const wss = new WebSocket.Server({ port: 8089 });
//
// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//         ws.send('yes baby ' + message )
//     });
//
//     ws.send('something');
//     setTimeout(()=>{
//         ws.send(173891273)
// },10000)
// });

