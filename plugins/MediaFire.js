let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
 if (!args[0]) throw 'Uhm..url nya mana?'
 let res = await fetch(API('Velgrynd', '/api/mediafire', { url: args[0] }, 'apikey'))
 if (!res.ok) throw await res.text()
 let json = await res.json()
 let { title, link } = json.result
 m.reply(JSON.stringify(json.result, null, 2))
 conn.sendFile(m.chat, link, title, '', m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^mediafire$/i

handler.limit = true

module.exports = handler
