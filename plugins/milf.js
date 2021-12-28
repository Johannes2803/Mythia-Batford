let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage/milf?apikey=79lJ9HEA`
  conn.sendFile(m.chat, res, 'milf.jpg', 'huu suka ama milf', m)
}
handler.help = ['milf']
handler.tags = ['anime']

handler.command = /^(milf)$/i

module.exports = handler
