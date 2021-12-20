let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendMessage(m.chat, `Sisa Limit Kamu ${global.DATABASE._data.users[who].limit}/10 \n\nKetik #buy <jumlah>  Atau #buyall Untuk Menambahkan nya`, 'conversation', { thumbnail:  await (await fetch('https://i.ibb.co/H2xpv56/elaina2.jpg')).buffer(), contextInfo: { forwardingScore: '508', isForwarded: true, stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: {viewOnce: true}}}}, remoteJid: 'status@broadcast' }})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler