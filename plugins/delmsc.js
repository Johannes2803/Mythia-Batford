let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let server = (args[1] || 'id4').toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
 let fs = require('fs')
 let y = fs.readFileSync('./logo.jpg')


conn.sendMessage(m.chat, `*Title:* ${title}\n*Size:* ${filesizeF}` , 'conversation', {quoted: m, thumbnail: global.thumb2, contextInfo:{externalAdReply: {title: 'Simple WhatsApp bot', body: `© ${conn.user.name}`, sourceUrl: '', thumbnail: y}}})
  if (!isLimit) conn.sendFile(m.chat, dl_link , 'conversation', {quoted: m, thumbnail: y, contextInfo:{externalAdReply: {title: `${title}`, body: `© ${conn.user.name}`, sourceUrl: '', thumbnail: y}}}, m, false, {ptt: true, duration: 999999999999})
}
handler.command = /^dlmsc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
