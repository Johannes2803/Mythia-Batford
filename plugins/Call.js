let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix }) => {

if (!text) throw `Contoh Penggunaan\n${usedPrefix}call 628xxxxxxxx`
let nomor = text.replace(/[^0-9]/gi, '').slice(2)
if (!nomor.startsWith('8')) throw `Contoh Penggunaan\n${usedPrefix}call 628xxxxxxxx`
m.reply('*_Tunggu permintaan anda sedang diproses_*')
let anu = await fetch(`https://id.jagreward.com/member/verify-mobile/${nomor}`).then(a => a.json())
let spcall = `Sukses mengirimkan call ke 62${nomor}`
conn.reply(m.chat, `${spcall}`.trim(), m)
m.reply(anu)
}
  
handler.help = ['call <nomor>']
handler.tags = ['tools']
handler.command = /^(call)$/i

module.exports = handler