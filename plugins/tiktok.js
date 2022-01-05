let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(API('Velgrynd', '/api/snaptik', { url: args[0] }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  conn.sendFile(m.chat, json.result.video.no_watermark, 'tiktok.mp4', json.result.description, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

handler.limit = true

module.exports = handler
