const  cheerio = require('cheerio');
const axios = require('axios');
const gplay = require('google-play-scraper');

exports.Apkdl = async (url)=>{
    try {
    let package_name = url.replace("https://apkcombo.com","").split("/")[2]
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
    const downloadLink = $('.variant').attr('href')+ "&fp=9819d795a02d821f653a88fb7e5f3740&ip=105.158.132.215";
    const fileSize = $('.spec.ltr').first().text().trim()
    const apkType = $('.type-apk').first().text().trim()
    const info = await gplay.app({appId: package_name});
    const Name = info.title
    const installs = info.installs
    const version = info.version
    const deve = info.developer 
    const icon = info.icon
    
    const msg_txt = `
╭───────────────◆
│📚 *Name* :${Name}
│🧰   *Version* :${version}
│👨🏻‍💻 *Developer* :${deve}
│📲 *Installs* :${installs}
│🔋 *FileSize* :${fileSize}
│📁 *Package name* :${package_name}
╰────────────────◆`
    return [msg_txt,icon,downloadLink,package_name+`.${apkType.toLowerCase()}`]
    } catch (error){
    return error ;
    }
}