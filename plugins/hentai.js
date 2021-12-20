let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.hentai()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['hentai']
handler.tags = ['dewasa']

handler.command = /^(hentai)$/i

module.exports = handler