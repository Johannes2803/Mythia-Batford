let scraper = require('@bochilteam/scraper')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  await m.reply('Loading...')
  let res = await scraper.instagramdl(args[0])
  for (let i = 0; i < res.length; i++) await conn.sendFile(m.chat, res[i].url, '', '', m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(ig(dl)?)$/i

module.exports = handler
