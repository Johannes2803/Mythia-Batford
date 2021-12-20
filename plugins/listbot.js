let handler  = async (m, { conn, participants, groupMetadata }) => {
  fil = participants.filter(v => v.vname || v.notify).filter(v => (v.notify || v.vname).toLowerCase().includes('bot'))
  conn.sendMessage(m.chat, `LIST BOT DI ${groupMetadata.subject} ` + `\n\n` + fil.map(v => '- @' + v.jid.replace(/@.+/, '')).join`\n`, 'conversation', { quoted: m, contextInfo : { mentionedJid: fil.map(v => v.jid) }})
}
handler.help = ['listbot']
handler.tags = ['group']
handler.command = /^(listbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
