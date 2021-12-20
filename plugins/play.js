const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} kokoronashi`
  let chat = global.DATABASE.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
    let d = new Date
    let locale = 'id'
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
  let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send3ButtonImg(m.chat, `
_*Judul: ${title}*_
_*Size Audio: ${filesizeF}*_
_*Size Video: ${yt2.filesizeF}*_
_*Source: ${vid.url}*_
_*Server y2mate: ${usedServer}*_
`.trim(), `${thumb}`, 'Jangan Lupa Donasi Kak', `🎵 AUDIO (${filesizeF})`, `.yta ${vid.url}`, `🎥 VIDEO (${yt2.filesizeF})`, `.yt ${vid.url}`, `🚫 DELETE`, `#delete`, { quoted: m, contextInfo: { mentionedJid: ['6288289368504@s.whatsapp.net'], isForwarded: true, externalAdReply :{
mediaUrl: `${vid.url}`,
mediaType: 2,
title: `${title}`,
body: `${week} ${date}`,
thumbnailUrl: `${thumb}`,
}}})  
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play)$/i

handler.premium = false

handler.exp = 0

module.exports = handler

