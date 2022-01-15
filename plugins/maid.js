let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://velgrynd.herokuapp.com/api/randomimage?q=maid&apikey=IchikaKey`
  conn.sendFile(m.chat, res, 'maid.jpg', 'huu suka ama maid', m)
}
handler.help = ['maid']
handler.tags = ['anime']

handler.command = /^(maid)$/i

module.exports = handler
