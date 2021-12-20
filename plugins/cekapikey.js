let get = require('node-fetch')
let handler = async (m, { conn,text,args}) => {
 let data = await get('https://zerochanbot.herokuapp.com/api/cekapikey?apikey='+args[0]).then(v => v.json())
  if (data.status != 200) throw `API : https://zerochanbot.herokuapp.com\nApikey : ${args[0]}\n\nApikey Invalid, Silahkan Chat Owner Untuk Membeli Apikey`
  if (data.status == 200) m.reply(`API : https://zerochanbot.herokuapp.com\nApikey : ${args[0]}\nStatus : Valid\n\nApikey Kamu Valid, Cuma Berlaku 30 hari Doang Ya Kak:)`)
}
handler.help = ['cekey']
handler.tags = ['api']

handler.command = /^cek(token|apikey|key)$/i

module.exports = handler