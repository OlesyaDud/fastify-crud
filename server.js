const fastify = require('fastify')({
    logger: true
});
const connectDB = require('./config/db');
const PORT = 4000;
const routes = require('./routes');


// db
connectDB();

// routing
routes.forEach((route, index) => {
    fastify.route(route)
});
// fastify.get('/', async (request, reply)=> {
//     return {visitor: "wodadev.com"}
// });
// fastify.get('/item', (req, reply) => {
//     reply.send({test: 'hi'})
// })



// starting server
const start = async () => {
    try {
        await fastify.listen(PORT)
        // fastify.log.info(`Server running on port ${address}`)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
};

start();