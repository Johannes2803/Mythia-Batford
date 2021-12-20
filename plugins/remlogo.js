let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
   let [t1] 
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${t1}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'glitch.jpg', `Nih kak`, m, false)
}
handler.help = ['remlogo'].map(v => v + 'teks')
handler.tags = ['sticker']

handler.command = /^(remlogo)$/i

module.exports = handler