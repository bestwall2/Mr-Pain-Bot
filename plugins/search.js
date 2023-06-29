const yts = require("youtube-yts");
const googleit = require("google-it");
const axios = require("axios");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
const {pinterest,styletext,getVideoYT} = require("./Scarp.js")
//const hxzapi = require("hxzapi");
const gplay = require('google-play-scraper');

const tenorApiKey = "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c"

exports.ytsearsh = async (text) => {
let search = await yts(text.replace(" ","+"));
let thumbnail2 = search.all[0].thumbnail;
let num = 1;

let txt2 = `*🏮 YouTube Search Engine 🏮*\n\n_🧩 Search Term:_ *${text}*\n\n*📌 Total Results:* *${search.all.length}*\n`;
for (let i of search.all) {
    txt2 += `\n_Result:_ *${num++}*\n_🎀 Title:_ *${
    i.title
     }*\n_🔶 Duration:_ *${i.timestamp}*\n_🔷 Link:_ ${i.url}\n\n`;
   }
return [txt2 , thumbnail2 ]
}
exports.lyrics = async (text) =>{
 let result = await axios.get(
          "https://fantox001-scrappy-api.vercel.app/lyrics?search=" + text.replace(" ","+")
        );
let lyrics = result.data.lyrics;
let thumbnail = result.data.thumbnail;
let resText2 = `  *『  ⚡️ Lyrics Search Engine ⚡️  』*\n\n\n_Search Term:_ *${text.replace("+"," ")}*\n\n\n*📍 Lyrics:* \n\n${lyrics}\n\n\n_*Powered by:*_ *Scrappy API - by Mr Pain*\n\n\n`;
return [resText2,thumbnail]
}
exports.google = async (text)=> {
let googleSearch = await googleit({ query: text.replace(" ","+") });
let vid_url = "https://media.tenor.com/3aaAzbTrTMwAAAPo/google-technology-company.mp4"
let resText = `  *『  ⚡️ Google Search Engine ⚡️  』*\n\n\n_🔍 Search Term:_ *${text.replace("+"," ")}*\n\n\n`;
for (let num = 0; num < 10; num++) {
        resText += `_📍 Result:_ *${num + 1}*\n\n_🎀 Title:_ *${
           googleSearch[num].title
         }*\n\n_🔶 Description:_ *${
           googleSearch[num].snippet
        }*\n\n_🔷 Link:_ *${googleSearch[num].link}*\n\n\n`;
}
  return [resText,vid_url] ;
}
exports.getSticker = async (text)=>{
let gif = await axios.get(
          `https://tenor.googleapis.com/v2/search?q=${text}&key=${tenorApiKey}&client_key=my_project&limit=8&media_filter=gif`
        );
let resultst = Math.floor(Math.random() * 8);
let gifUrl = gif.data.results[resultst].media_formats.gif.url;
let response = await axios.get(gifUrl, {
      responseType: "arraybuffer",
        });
let buffer = Buffer.from(response.data, "utf-8");

let stickerMess = new Sticker(buffer, {
          pack: "+212623523502 ddoz hena",
          author: "Mr Pain",
          type: StickerTypes.FULL,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 60,
          background: "transparent",
        });
let stickerBuffer2 = await stickerMess.toBuffer();
    return stickerBuffer2 ;
}
exports.pinterest = async (text) => {
const res = await pinterest(text.replace("+",""));
imgnyee = res[Math.floor(Math.random() * res.length)];
let txt = `\n 🎀 Pinterest Search 🎀 \n\n *Term*:✨${text.replace("+","")}✨\n\n *Powered by*:🍁MrPain🍁\n`; 
return [txt,imgnyee]     
}
exports.txtstyle = async (text) => {
const txt = await styletext(text.replace("+"," "));
let msg = `\n      *『 ✨ Text Style ✨ 』*\n\n `
for (sty of txt ){
    msg += `🍁 *${sty.name}* : ${sty.result} \n`  
}
    return msg;
    }
exports.getYt = async (text) => {
let txt = "";
const v = await getVideoYT(text.trim());
txt+= `╭───────────────◆
│  *Youtube Player* ✨
│⿻ *Title:* ${v[3]}
│⿻ *Duration:* ${v[1]}
│⿻ *Descri* ${v[4]}
│⿻ *Author:* ${v[0]}
╰────────────────◆` ;                                                                     
//console.log(txt,v[5])
return [txt , v[5]];

}
exports.apksh = async (text) =>{
    let txt1 = `\n   🪄🍁 *Apk Search* 🪄🍁\n`
    const result = await gplay.search({term: text,num: 20});
      temp = result[0].icon;
    for (item of result){
      urldl = `https://apkcombo.com/${item.title.trim().replace(/\s/g,"").replace("  ","").split(":")[0].split("–")[0].trim()}/${item.appId}/download/apk`
      txt1+=`\n◆────────────────◆\n📚 *Name* :${item.title.split(":")[0]}\n🧰 *ScoreText* : ${item.scoreText}\n👨🏻‍💻 *Developer* :${item.developer}\n📲 *UrlDl* :${urldl}\n📁 *Package name* :${item.appId}\n◆────────────────◆\n`
    }
    
   return [txt1,temp];
}
