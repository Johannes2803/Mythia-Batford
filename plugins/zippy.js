let zsExtract = require('zs-extract')

let handler = async (m, { conn, args }) => {
 if (!args[0]) throw 'Uhm...url nya mana?'
 let res = await zsExtract.extract(args[0])
 let { download, filename } = res
 m.reply(JSON.stringify(res, null, 2))
 conn.sendFile(m.chat, download, filename, filename, m)
}
handler.help = ['ippydl', 'ippyshare','s'].map(v => 'z' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^z(ippydl|ippyshare|s)$/i

handler.limit = true

module.exports = handler
