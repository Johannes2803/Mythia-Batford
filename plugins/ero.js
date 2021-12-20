let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.ero()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['ero']
handler.tags = ['dewasa']

handler.command = /^(ero)$/i

module.exports = handler