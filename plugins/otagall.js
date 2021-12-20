let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
	let user = global.DATABASE._data.users[m.sender]
  if (user.registered === false) throw `Anda Belum Terdaftar Di Database Bot Silahkan Ketik *.daftar namamu|umurmu*`
     let [l, r] = text.split `|`
         if (!l) return conn.reply(m.chat, 'Contoh Penggunaan : *.otagall admin|Nimbrung bro*', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan pesan anda', m)

  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '╭─ ❏「 *TAG ALL* 」\n│\n├ ❏ *Nama:* ' + l +  '\n├ ❏ *Pesan:* ' + r +'\n│\n' + users.map(v => '├ ❏ @' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: users }
 
  
})
}
handler.command = /^otagall$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
