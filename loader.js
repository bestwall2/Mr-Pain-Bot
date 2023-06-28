const fs = require("fs");
const { tools } = require("./lib/tools");
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
const { BOT_EMOJI, logo, PREFIX } = require("./config");
const {checker} = require("./checker");

function catCmd(text){
    if (text !== undefined){
        const firstSpaceIndex = text.indexOf(" ");
        const firstWord = text.substring(0, firstSpaceIndex !== -1 ? firstSpaceIndex : text.length);
        return firstWord;
    }else{
        return "MR Pain"
    }
}

exports.load = (bot) => {
  bot.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0];
   // if (msg.key.fromMe) {
     // return;
  //  }
    
    
    const textMessage = msg.message?.conversation.toLowerCase();
    if (textMessage === undefined) {
      return; // Exit early if textMessage is undefined
    }
    const CMD = catCmd(textMessage);
    const text = textMessage.replace(CMD, "").replace(" ","+")
    const id = msg.key.remoteJid;
    console.log(textMessage, CMD, text);
    checker({bot,msg}, CMD, text ,textMessage);

      
  });
};
