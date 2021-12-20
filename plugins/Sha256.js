let handler = async (m, { command, text }) => {
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
  m.reply(Buffer.from(txt, 'utf-8').toString('sha256'))
}
handler.help = ['sha256']
handler.tags = ['tools']
handler.command = /^sha256$/i

module.exports = handler