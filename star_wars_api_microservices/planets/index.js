const server = require('./src/server');

const PORT = 3004;

server.listen(PORT, () => {
    console.log(`Planets service listening on port: ${PORT}`);
});