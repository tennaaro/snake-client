// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    // code that does something when the connection is first established
    console.log(`Incoming data: ${data}`);
  });

  return conn;
};

module.exports = {
  connect
};