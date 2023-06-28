const  { connect } = require("./connection");
const { load } = require("./loader");
const createServer = require("./server");
async function start() {
  const bot = await connect();
  load(bot);
}
createServer();
start();
