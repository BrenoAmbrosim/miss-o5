const app = require('../app');
const debug = require('debug')('biblioteca:server');
const http = require('http');

const normalizePort = (value) => {
  const parsedValue = parseInt(value, 10);
  if (parsedValue >= 0) {
    return parsedValue;
  }
  else {
    if (isNaN(parsedValue)) {
      return value;
    }
  }
  return false;
}

const port = normalizePort(process.env.PORT || '3030');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
