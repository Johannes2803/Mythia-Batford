let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh: ${usedPrefix + command} ichika amasawa`
  let res = await fetch(global.API('Velgrynd', '/api/pinterest', { query: encodeURI(text) }, 'apikey'))
  if (!res.ok) throw await `${res.status}`
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.result[Math.floor(Math.random() * json.result.length)];
  conn.sendFile(m.chat, pint, '', `
*Hasil pencarian*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

module.exports = handler
