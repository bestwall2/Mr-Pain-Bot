const path = require("path"); 
const fs = require("fs")

//━━━━━━━━━━━━━━━━━━━━━━━━\\

function checkTime() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 0 && currentHour < 6) {
     return '🌙 Good Night! 🌠'
  } else if (currentHour >= 6 && currentHour < 12) {
     return '☀️ Good Morning! ☄💫'
  } else {
     return '🌞 Good Day! ☄️'
  }
}

//━━━━━━━━━━━━━━━━━━━━━━━━\\

 exports.PREFIX = "/";
 exports.TIME = checkTime();
 exports.BOT_EMOJI = "🤖"; 
 exports.logo = fs.readFileSync("./logo.jpg")
 exports.STYLE = fs.readFileSync("./style.jpg")
 exports.BOT_NAME = "Mr Pain";
 exports.logo2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/695e13b0-e18d-4971-854c-68efd624afbc/dc8wpr7-a60eb014-a545-4922-b1fd-0b925fba3199.png/v1/fill/w_1024,h_740,q_80,strp/kaneki_wallpaper_edit_by_shinimzu_dc8wpr7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQwIiwicGF0aCI6IlwvZlwvNjk1ZTEzYjAtZTE4ZC00OTcxLTg1NGMtNjhlZmQ2MjRhZmJjXC9kYzh3cHI3LWE2MGViMDE0LWE1NDUtNDkyMi1iMWZkLTBiOTI1ZmJhMzE5OS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0xs-7q3JoaYyZ-61xRialCAfMSTqQ7C6Z83IBceAmCo"