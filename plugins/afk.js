var {WAMessageProto} = require('@adiwajshing/baileys')
let fs = require ('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let nani = 'https://telegra.ph/file/bfad1ea59a4ebdaab8107.jpg'
  await conn.sendButtonLoc(m.chat, await (await fetch(nani)).buffer(), `
Fitur AFK Berhasil Diaktifkan!

» User Name : ${conn.getName(m.sender)}
» Alasan : ${text ? '' + text : 'No Text'}
`.trim(), '', 'Ok', 'ok')

}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
