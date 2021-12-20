let nhentai = require('nhentai-node-api')

let handler = async (m, { conn, usedPrefix, text }) => {
	if (!text) return m.reply('Cari apa?')
	await m.reply('Loading...')
	let res = await nhentai.search(text)
	let txt = `*_Reply pesan ini untuk mendownload_*\n`
	txt += `Contoh: ${usedPrefix}getnhentai 1\n\n`
	let nomor = 0
	for (let i of res) {
		txt += `*${nomor += 1}. ${i.title}*\n`
		txt += `ID: ${i.id}\n`
		txt += `Language: ${i.language}\n`
		txt += `─`.repeat(25) + `\n`
	}
	m.reply(txt, null, { contextInfo: { externalAdReply: { title: res[0].title, body: 'Language: ' + res[0].language, thumbnailUrl: res[0].thumbnail, sourceUrl: res[0].thumbnail }}})
}
handler.help = ['nhentaisearch (judul)']
handler.tags = ['dewasa']
handler.command = /^nh?(search|entaisearch)$/i
module.exports = handler