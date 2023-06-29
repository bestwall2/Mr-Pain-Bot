const {Apkdl} = require('./plugins/downloader');
const { tools } = require("./lib/tools");
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
const { BOT_EMOJI, logo, PREFIX,STYLE} = require("./config");

async function checker_Dl({ bot, msg }, CMD, TEXT) {
      const q = tools({ bot, msg });
      switch(CMD){
          case `${PREFIX}apkdl`:
            if(!TEXT.includes("https://apkcombo.com/")){
                await q.sendReact("❌");
                return await q.sendReply("*أكتب الأمر بهاذه الطريقة /apkdl <url>*")
            }
              try {
                  await q.sendReact("📥");
                  const dlapk = await Apkdl(TEXT);
                  await q.IMG_CAPTAIN(dlapk[0],dlapk[1]);                  
              } catch (error) {
                  await q.sendErrorReply("sσмє τнiиɢ ωαяиiиɢ !");
          }
          break;
      }
}
module.exports = { checker_Dl };
