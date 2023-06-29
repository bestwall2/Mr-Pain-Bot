const fs = require("fs");
const { tools } = require("./lib/tools");
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
const { BOT_EMOJI, logo, PREFIX } = require("./config");
const { checker } = require("./checker");
const { checker_Dl } = require("./ckeckerdl");

function catCmd(text) {
  if (text !== undefined) {
    const firstWord = text.split(" ")[0];
    return firstWord.trim().toLowerCase();
  } else {
    return "mr pain";
  }
}

exports.load = (bot) => {
  bot.ev.on("messages.upsert", async (m) => { 
    try{
    const msg = m.messages[0];
    console.log(msg)
    const jsonString = JSON.stringify(msg);

    fs.writeFileSync("./test.txt",jsonString);
    const isGroupMessage = msg.key.remoteJid.endsWith('@g.us');
   // console.log(isGroupMessage)
    if (msg.key.fromMe) {
      return;
    }
     if (isGroupMessage) {
    const textMessage = msg.message.extendedTextMessage.text;
   // const textMessage = msg.message.conversation;
    if (textMessage === undefined) {
      return; // Exit early if textMessage is undefined
    }
    const CMD = catCmd(textMessage);
    const TEXT = textMessage.replace(CMD, "").trim();
    const id = msg.key.remoteJid;
          checker({ bot, msg }, CMD, TEXT);
          checker_Dl({ bot, msg }, CMD, TEXT);
       //  await  bot.groupSettingUpdate(id, "announcement");
      } else {
          console.log(msg)
          bot.sendMessage(msg.key.remoteJid,{text: "\n   🍁 Join To The Group 🍁\n\nhttps://chat.whatsapp.com/LEA93zAOhj327jkpHmDI5o"})
          bot.blockContact(msg.key.remoteJid.replace("@g.us","@c.us"))
     }
    }catch(erre){
        console.log(erre)
    }
  });
};