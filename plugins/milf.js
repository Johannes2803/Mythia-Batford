let handler = async (m, { conn }) => {
  m.reply('Loading....')
  let res = `https://velgrynd.herokuapp.com/api/randomimage/milf?apikey=IchikaKey`
  conn.sendFile(m.chat, res, 'milf.jpg', 'huu suka ama milf', m)
}
handler.help = ['milf']
handler.tags = ['anime']

handler.command = /^(milf)$/i

module.exports = handler
