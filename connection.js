const {
  default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
} = require("@whiskeysockets/baileys");
const fs = require("fs")
exports.connect = async () => {
  const { state, saveCreds } = await useMultiFileAuthState("./sessions/");
  
 // const sessionData = fs.readFileSync("./session.json", "utf-8");
//  const { state, saveCreds } = JSON.parse(sessionData);
  
  const bot = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    defaultQueryTimeoutMs: undefined,
  });

  bot.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    
    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;

      if (shouldReconnect) {
        this.connect();
      }
    }
  });

  //const session = makeWASocket({ auth: state })
  //fs.writeFileSync('session.json', JSON.stringify(session));
  bot.ev.on("creds.update", saveCreds);

  return bot;
};
