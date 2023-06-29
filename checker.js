const { tools } = require("./lib/tools");
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
const { BOT_EMOJI, logo, PREFIX,STYLE} = require("./config");
const { ytsearsh,getYt, google, getSticker, lyrics, pinterest,txtstyle,apksh} = require('./plugins/search');

async function checker({ bot, msg }, CMD, TEXT) {
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
      const res1 = await ytsearsh(TEXT);
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
      case `${PREFIX}textstyle`:
      case `${PREFIX}tstyle`:
      if(!TEXT){
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهاذه الطريقة /textstyle Mr Pain*")
      }
      await q.sendReact("🪄");
      const style = await txtstyle(TEXT);
      await q.IMG_CAPTAIN_FILE(style,STYLE);
      break;
      case `${PREFIX}ytdl`:      
      if(!TEXT.includes("https://youtu")){
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهاذه الطريقة /ytdl <url> *")
      }
     try {
      await q.sendReact("🔍");
      console.log(TEXT);
      const v = await getYt(TEXT);
      await q.sendVideo(v[0],v[1],false);                  
       } catch (error) {
      await q.sendErrorReply("sσмє τнiиɢ ωαяиiиɢ !");
     }
      break;
      case `${PREFIX}apksh`:      
      if(!TEXT){
        await q.sendReact("❌");
        return await q.sendReply("*أكتب الأمر بهاذه الطريقة /apksh Mr Pain*")
      }
     try {
      await q.sendReact("📤");
      //console.log(TEXT);
      const apks = await apksh(TEXT);
      await q.IMG_CAPTAIN(apks[0],apks[1]);                  
       } catch (error) {
      await q.sendErrorReply("sσмє τнiиɢ ωαяиiиɢ !");
     }
      break;
    default:
      // Handle unrecognized commands
      break;
  }
}

module.exports = { checker };
