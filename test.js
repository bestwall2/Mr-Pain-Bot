const {pinterest,wallpaper,wikimedia,styletext,ringtone,aiovideodl,quotesAnime} = require("./plugins/Scarp.js")
const yts = require("youtube-yts");

styletext('balck').then((res) =>{
let msg = `\n *『 ✨ Text Style ✨ 』*\n\n `
for (sty of res ){
    msg += `🍁*${sty.name}*: ${sty.result} \n\n`  
}
console.log(msg);
});



