const axios = require('axios')
const cheerio = require('cheerio')
const ytdl = require('ytdl-core-discord');

function pinterest(querry) {
  return new Promise(async (resolve, reject) => {
    axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
      headers: {
        "cookie":"_auth=1; _b=\"AXHYySKqfl1Df7Wetjfro4+NzQJP/Jl8Mq0ao9c2g6pAChnYX0q4IIu8w4T7RrW44oc=\"; _pinterest_sess=TWc9PSZVOGYrQ0N6T1lJRll0WUpIbDNqWHNrVVp3eTZkTnlITXI4UjdQNVVYS09Qc0V2TEw3c05jWEpaRXgrTU9LR3FrSnVyWmgydWZ1MCtWQVFQSW40emw4aUdiOGttMi9hMDN3Y0owcW1HMWtCY1RBRWUzS0lLUVcvUWVBbDVZb3NEOWhCRGlpT0dzamk0VXhuWFJ5bGYwRmlYRGR5dHFCcDE5NXJwYXEzWXM5S1FrNkNHYnVpOUxidXFuSEJJa1NJYUt6eW1GSnNzeU1YVnBMMkFRNk1BQzVYQ0s4cGtEWnAyOXJKdkh6V3hjM1BrT0FUeDI0ZlhxNEEybHZlSmgrNTFhaFVIZDBtMVZSYzhFTGhDWFkvZzZ0MFJ5WmNOelpISmlGOTlWRU5LRy9DMzhiNW5QQUVaYS95NkZyUzhTUmY0RVpyV3FneHVqN2hTbGxHTFBCdWIvRktWTXd1MzJ2UjN6dVVPL1R6azBGV2c4NjhiU0crNzhoQzluV0FNK3ZNYWo2VGNSYW0zODRxejEvV3RhYktjdG5BPT0mMUN5N1EzZVZoZ2lSMytvR2hubGVKb3JpTkJzPQ==; _ir=0"
            }
    }).then(({ data }) => {
      const $ = cheerio.load(data)
      const result = [];
      const fetchedresult = [];
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      });
      result.forEach(v => {
        if (v == undefined) return
        fetchedresult.push(v.replace(/236/g, '736'))
      })
      fetchedresult.shift();
      resolve(fetchedresult)
    })
  })
}

function wallpaper(title, page = '1') {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
      .then(({ data }) => {
        let $ = cheerio.load(data)
        let fetchedresult = []
        $('div.grid-item').each(function(a, b) {
          fetchedresult.push({
            title: $(b).find('div.info > a > h3').text(),
            type: $(b).find('div.info > a:nth-child(2)').text(),
            source: 'https://www.besthdwallpaper.com/' + $(b).find('div > a:nth-child(3)').attr('href'),
            image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
          })
        })
        resolve(fetchedresult)
      })
  })
}

function wikimedia(title) {
  return new Promise((resolve, reject) => {
    axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
      .then((res) => {
        let $ = cheerio.load(res.data)
        let fetchedresult = []
        $('.sdms-search-results__list-wrapper > div > a').each(function(a, b) {
          fetchedresult.push({
            title: $(b).find('img').attr('alt'),
            source: $(b).attr('href'),
            image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
          })
        })
        resolve(fetchedresult)
      })
  })
}

function quotesAnime() {
  return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 184)
    axios.get('https://otakotaku.com/quote/feed/' + page)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const fetchedresult = []
        $('div.kotodama-list').each(function(l, h) {
          fetchedresult.push({
            link: $(h).find('a').attr('href'),
            gambar: $(h).find('img').attr('data-src'),
            karakter: $(h).find('div.char-name').text().trim(),
            anime: $(h).find('div.anime-title').text().trim(),
            episode: $(h).find('div.meta').text(),
            up_at: $(h).find('small.meta').text(),
            quotes: $(h).find('div.quote').text().trim()
          })
        })
        resolve(fetchedresult)
      }).catch(reject)
  })
}

function aiovideodl(link) {
  return new Promise((resolve, reject) => {
    axios({
      url: 'https://aiovideodl.ml/',
      method: 'GET',
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
      }
    }).then((src) => {
      let a = cheerio.load(src.data)
      let token = a('#token').attr('value')
      axios({
        url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
        method: 'POST',
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
        },
        data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
      }).then(({ data }) => {
        resolve(data)
      })
    })
  })
}

function umma(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => {
        let $ = cheerio.load(res.data)
       let image = []
        $('#article-content > div').find('img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        let fetchedresult = {
          title: $('#wrap > div.content-container.font-6-16 > h1').text().trim(),
          author: {
            name: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw').text().trim(),
            profilePic: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo').attr('src')
          },
          caption: $('#article-content > div > p').text().trim(),
          media: $('#article-content > div > iframe').attr('src') ? [$('#article-content > div > iframe').attr('src')] : image,
          type: $('#article-content > div > iframe').attr('src') ? 'video' : 'image',
          like: $('#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12').text(),
        }
        resolve(fetchedresult)
      })
  })
}

function ringtone(title) {
  return new Promise((resolve, reject) => {
    axios.get('https://meloboom.com/en/search/' + title)
      .then((get) => {
        let $ = cheerio.load(get.data)
        let fetchedresult = []
        $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function(a, b) {
          fetchedresult.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/' + $(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
        })
        resolve(fetchedresult)
      })
  })
}

function styletext(teks) {
  return new Promise((resolve, reject) => {
    axios.get('http://qaz.wtf/u/convert.cgi?text=' + teks)
      .then(({ data }) => {
        let $ = cheerio.load(data)
        let fetchedresult = []
        $('table > tbody > tr').each(function(a, b) {
          fetchedresult.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
        })
        resolve(fetchedresult)
      })
  })
}
function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minutes ${remainingSeconds} seconds`;
}

async function getVideoYT(url) {
  return new Promise(async (resolve, reject) => {
  try{  
    const videoInfo = await ytdl.getInfo(url);

    // Get available video formats
    const formats = videoInfo.formats;

    let highQualityURL = '';
    let mediumQualityURL = '';
    let lowQualityURL = '';

    formats.forEach(format => {
      if (
        format.hasVideo &&
        format.hasAudio &&
        format.qualityLabel !== 'tiny'
      ) {
        if (!highQualityURL && format.contentLength < 100 * 1024 * 1024) {
          highQualityURL = format.url;
        }
        if (!mediumQualityURL && format.contentLength < 50 * 1024 * 1024) {
          mediumQualityURL = format.url;
        }
        if (!lowQualityURL) {
          lowQualityURL = format.url;
        }
      }
    });
     let video_url = "";
    if (highQualityURL) {
      video_url = highQualityURL ;
    } else if (mediumQualityURL) {
      video_url = mediumQualityURL;
    } else if (lowQualityURL) {
      video_url = lowQualityURL;
    } else {
      video_url ='No video with the specified criteria found.';
    }

    // Get additional video details
    
    const author = videoInfo.videoDetails.author.name;
    const duration = secondsToMinutes(videoInfo.videoDetails.lengthSeconds);
    const thumbnail = videoInfo.videoDetails.thumbnails[0].url;
    const title = videoInfo.videoDetails.title;
    const description = videoInfo.videoDetails.description;
    const data = [author,duration,thumbnail,title,description,video_url]
    resolve(data)
    } catch(error) {
    resolve([])
  //  console.log(error)  
  }
   // return 'Error fetching video information:'
   
      // Handle error
      
  });
  
}
module.exports = { pinterest, wallpaper, wikimedia,quotesAnime, aiovideodl, umma, ringtone, styletext,getVideoYT }