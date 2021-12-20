let fs = require('fs')
  let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = (/bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Broadcast 」')
  for (let id of chats) conn.copyNForward(id, content, m.mtype, m.msg.contextInfo ? { thumbnail: fs.readFileSync('./logo..jpg'), contextInfo:{externalAdReply: {title: `© ${conn.user.name} BROADCAST` , body: '>///<',sourceUrl: 'https://chat.whatsapp.com/Cc4T5iTdDU5GUtnWfaS5a3', thumbnail: fs.readFileSync('./src/thumb.jpeg')}}} ,true)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
