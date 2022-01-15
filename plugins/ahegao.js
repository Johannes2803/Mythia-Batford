let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=1221a9c62630c6207ebb4761`
  conn.sendFile(m.chat, res, 'ahegao.jpg', `Wangy Wangy wangy`, m, false)
}
handler.help = ['ahegao'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(ahegao)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

