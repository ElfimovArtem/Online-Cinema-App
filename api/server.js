const fastify = require('fastify');

const server = fastify({ logger: true });
const PORT = process.env.PORT || 5000;
require('./movies')(server, {});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

module.exports = server;
