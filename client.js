// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  const name = "BMX";

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Succesfully connected!")
    conn.write(`Name: ${name}`)
  })

  conn.on('data', (data) => {
    // code that does something when the connection is first established
    console.log(`Incoming data: ${data}`);
  });

  return conn;
};

module.exports = {
  connect
};