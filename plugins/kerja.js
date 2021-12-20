//
let fs = require('fs')
let delay = require('delay')
let handler = async (m, { conn, text }) => {
let total = Math.floor(Math.random() * 999);
let json = { exp: total }
conn.mining = conn.mining ? conn.mining : {}
 if (conn.mining[m.chat]) throw '*Jangan Spam, Coldown 5 detik!!!!*'
  conn.reply(m.chat, `Selamat Anda Mendapatkan\n*+${json.exp}* XP`, m)
  conn.mining[m.chat] = true 
   global.DATABASE._data.users[m.sender].exp += json.exp * 1
   setTimeout(() => { 
   delete conn.mining[m.chat]
  }, 5 * 1000)
}
handler.help = ['kerja']
handler.tags = ['xp']
handler.command = /^kerja|nguli/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler