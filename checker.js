const { tools } = require("./lib/tools");
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
const { BOT_EMOJI, logo, PREFIX } = require("./config");
const { ytsearch, google, getSticker, lyrics, pinterest } = require('./plugins/search');

async function checker({ bot, msg }, CMD, TEXT, textMessage) {
  const q = tools({ bot, msg });
  switch (CMD) {
    case `${PREFIX}menu`:
      await q.sendReact("📜");
      await q.sendMenu();
      break;
    case `${PREFIX}yts`:
      if (!TEXT) {
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهذه الطريقة /yts Mr Pain Bot*");
      }
      await q.sendReact("🔍");
      const res1 = await ytsearch(TEXT);
      await q.IMG_CAPTAIN(res1[0], res1[1]);
      break;
    case `${PREFIX}lyrics`:
      if (!TEXT) {
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهذه الطريقة /lyrics Hootline*");
      }
      await q.sendReact("🎼");
      const res2 = await lyrics(TEXT);
      await q.IMG_CAPTAIN(res2[0], res2[1]);
      break;
    case `${PREFIX}google`:
      if (!TEXT) {
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهذه الطريقة /google Mr Pain Bot*");
      }
      await q.sendReact("🔍");
      const res3 = await google(TEXT);
      await q.sendVideo(res3[0], res3[1], true);
      break;
    case `${PREFIX}getstk`:
      if (!TEXT) {
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهذه الطريقة /getStk hell paradise*");
      }
      await q.sendReact("🐸");
      const stik = await getSticker(TEXT);
      await q.sendSticker(stik);
      break;
    case `${PREFIX}pin`:
    case `${PREFIX}pinterest`:
      if (!TEXT) {
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهذه الطريقة /pin hell paradise*");
      }
    try{
      await q.sendReact("🌠");
      const pin = await pinterest(TEXT);
      //console.log(pin);
      await q.IMG_CAPTAIN(pin[0], pin[1]);
    }catch (err){
      await q.sendErrorReply("sσмє τнiиɢ ωαяиiиɢ !")
    }
      break;
      case `${PREFIX}vid`:
      if(!TEXT){
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهاذه الطريقة /getStk Mr Pain Bot*")
      }
      await q.sendReact("🐸");
      const vid = "https://cima9.upbaam.com/8fhfc2oss8jo/Maid.For.Revenge.2023.480p.WEB-DL.weciima.autos.mp4.html?Key=QCwAXT4dwoArJD1IsU5kBA&Expires=1687711949"
      await q.sendFileUrl(vid,'video/mp4',"film-tezt-send.mp4")
      break;
    default:
      // Handle unrecognized commands
      break;
  }
}

module.exports = { checker };
