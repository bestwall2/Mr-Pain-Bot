const { BOT_EMOJI ,logo,PREFIX} = require("./../config");
const {menuMessage} = require("./commands/menu.js")
const fs = require("fs")
exports.tools = ({ bot, msg }) => { 

  const remoteJid = msg?.key?.remoteJid;
   const prefix =`${PREFIX}`
  const commandName = "menu"
  const args = ""
   const sendText = async (text) => 
     await bot.sendMessage(remoteJid, { text: `${BOT_EMOJI} ${text}` }); 
  
   const sendReply = async (text) => 
     await bot.sendMessage( 
       remoteJid, 
       { text: `${BOT_EMOJI} ${text}` }, 
       { quoted: msg } 
     ); 
  
   const sendReact = async (emoji) => 
     await bot.sendMessage(remoteJid, { 
       react: { 
         text: emoji, 
         key: msg.key, 
       }, 
     }); 
  
   const sendSuccessReact = async () => await sendReact("✅"); 
   const sendWaitReact = async () => await sendReact("⏳"); 
   const sendWarningReact = async () => await sendReact("⚠️"); 
   const sendErrorReact = async () => await sendReact("❌"); 
  
   const sendSuccessReply = async (text) => { 
     await sendSuccessReact(); 
     return await sendReply(` ${text}`); 
   }; 
  
   const sendWaitReply = async (text) => { 
     await sendWaitReact(); 
     return await sendReply("⏳please wait moment ...!"); 
   }; 
  
   const sendWarningReply = async (text) => { 
     await sendWarningReact(); 
     return await sendReply(`⚠️  ${text}`); 
   }; 
  
   const sendErrorReply = async (text) => { 
     await sendErrorReact(); 
     return await sendReply(`❌ Erro! ${text}`); 
   }; 
  
   const sendStickerFromUrl = async (url) => 
     await bot.sendMessage(remoteJid, { 
       sticker: { url: url }, 
     }); 

  const sendSticker = async (file) => 
     await bot.sendMessage(remoteJid, { 
       sticker : file,
     }); 

   const sendImageFile = async (file) => 
     await bot.sendMessage(remoteJid, { 
       image: file 
     }); 

  const sendImageUrl = async (url) => 
     await bot.sendMessage(remoteJid, { 
       image: { url: url }, 
     }); 

   const sendMenu = async () => {
   const msg_img = {
    image:logo,caption:menuMessage(),quoted:msg,
    footer: '©mr_pain',
    headerType: 2
    }
    await bot.sendMessage(remoteJid,msg_img);
   }
   const sendFile = async (file_data,type,fileName) =>{
    await bot.sendMessage(remoteJid,{
        document:file_data,
        mimetype:`${type}`,
        fileName: fileName,
    });
      }
    const sendFileUrl = async (file_url,type,fileName) =>{
    await bot.sendMessage(remoteJid,{
        document:{url:file_url},
        mimetype:`application/${type}`,
        fileName: fileName,
    });
    }
    const sendAudio = async (url) => {
    await bot.sendMessage(remoteJid,{
          audio: {url:url},
          mimetype: 'audio/mp4'},
          { quoted: m })
    }
   const IMG_CAPTAIN = async (text,url) => {
   const msg_img = {
    image:{url:url},caption:text,quoted:msg,
    footer: '©mr_pain',
    headerType: 2
    }
    await bot.sendMessage(remoteJid,msg_img);
}
    const sendVideo = async (text,url,statu) => {
    bot.sendMessage(remoteJid,
         {
             video:{url:url},
             caption:text,
             gifPlayback:statu
             },{ quoted:msg})
             }
    return { 
     bot, 
     remoteJid, 
     prefix, 
     commandName, 
     args, 
     msg, 
     sendText,
     IMG_CAPTAIN,
     sendReply, 
     sendStickerFromUrl, 
     sendSticker,
     sendImageFile, 
     sendReact, 
     sendSuccessReact, 
     sendWaitReact, 
     sendWarningReact, 
     sendErrorReply, 
     sendSuccessReply, 
     sendWaitReply, 
     sendWarningReply, 
     sendErrorReact, 
   sendMenu,
   sendImageUrl,
   sendFile,
   sendAudio,
   sendFileUrl,
   sendVideo
   }; 
 };