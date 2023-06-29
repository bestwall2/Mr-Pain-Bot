const {BOT_NAME,PREFIX,TIME} = require("./../../config.js"); 
  
 //exports.waitMessage = "Carregando dados..."; 
  
 exports.menuMessage = () => { 
 const date = new Date(); 
  
 return `╭━━⪩ *BOT INFO!* ⪨━━ 
 ▢ 
 ▢ • 🍀✨${BOT_NAME}✨🍀
 ▢ • *Date*: ${date.toLocaleDateString("pt-br")} 📆
 ▢ • *Hour*: ${date.toLocaleTimeString("pt-br")} ⏲️
 ▢ • *Prefix*: ${PREFIX} 📌
 ▢ • ${TIME}
 ╰━━━─「🪐」─━━━ 
 ╭━━⪩✨ *MENU* ✨⪨━━ 
 ▢ • ${PREFIX}ytdl
 ▢ • ${PREFIX}ig
 ▢ • ${PREFIX}fb
 ▢ • ${PREFIX}tik
 ▢ • ${PREFIX}mdf 
 ▢ • ${PREFIX}apk
 ╰━━━─「📜」─━━━ 
 ╭━━⪩🔍 *SEARCH* 🔍⪨━━
 ▢ • ${PREFIX}yts
 ▢ • ${PREFIX}google 
 ▢ • ${PREFIX}lyrics
 ▢ • ${PREFIX}pin
 ▢ • ${PREFIX}getstk
 ▢ • ${PREFIX}textstyle
 ▢ • ${PREFIX}apksh
 ╰━━━━─「🔍」─━━━━
 ╭━━⪩🍀 *COVERT* 🍀⪨━━
 ▢ • ${PREFIX}tosticker
 ▢ • ${PREFIX}vsticker
 ╰━━━━─「📎」─━━━━
 ╭━━⪩🐸 *Owner* 🐸⪨━━
 ▢ • ${PREFIX}add
 ▢ • ${PREFIX}ban
 ▢ • ${PREFIX}gmot
 ▢ • ${PREFIX}gdmot
 ▢ • ${PREFIX}mute
 ▢ • ${PREFIX}unmute
 ▢ • ${PREFIX}tagall
 ▢ • ${PREFIX}block
 ╰━━━━─「👤」─━━━━
 ╭━━⪩🎆 *TEST* 🎆⪨━━
 ▢ • ${PREFIX}Movies
 ▢ • ${PREFIX}dlM
 ╰━━━━━─「❔」─━━━━━╮
 │ 🍀Thanks Ahmed🍀
 ╰━─「🍁 *Mr Pain* 🍁」─━╯`; 
 };