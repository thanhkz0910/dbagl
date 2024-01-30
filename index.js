import jsonServer from 'json-server'
222
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const PORT = 8080;
server.use(middleware);
server.use(router);
server.listen(PORT)