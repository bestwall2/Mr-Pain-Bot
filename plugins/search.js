const yts = require("youtube-yts");
const googleit = require("google-it");
const axios = require("axios");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
const {pinterest,wallpaper,wikimedia,styletext,ringtone,umma,aiovideodl,quotesAnime} = require("./Scarp.js")
//const hxzapi = require("hxzapi");
const tenorApiKey = "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c"

exports.ytsearsh = async (text) => {
let search = await yts(text);
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
    