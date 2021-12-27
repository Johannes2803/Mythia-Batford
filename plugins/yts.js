let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Cari apa?')
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
» Judul : *${v.title}* 
» Link : ${v.url}
» Duration: ${v.timestamp}
» Uploaded : ${v.ago}
» Views : ${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n────────────────\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler
