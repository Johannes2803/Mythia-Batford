let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: 'Japan',
jpegThumbnail: fs.readFileSync('./logo.jpg')
  }
 }
}
let listOwner = new Array()
  for (let i of owner.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net')) {
  	listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Work\nURL;Web gwejh: https://github.com/Johannes2803\nEMAIL;Email Owner: johannes123.j1@gmail.com\nORG: BUKAN BOT + NO SAVE\nTEL;NO CHAT P;waid= ${i.split('@')[0]}:${i.split('@')[0]}\nEND:VCARD` })
  }
  let send = this.sendMessage(m.chat, { displayName: listOwner.length + ' kontak', contacts: listOwner }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '#donasi', buttonText: {displayText: 'DONASI'}, type: 1},
  {buttonId: '#menu', buttonText: {displayText: 'BACK TO MENU'}, type: 1},
  {buttonId: '#sc', buttonText: {displayText: 'SOURCE CODE'}, type: 1},  
  
]
const buttonsMessage = {
    contentText: `
Hai Kak @${m.sender.replace(/@.+/, '')} 👋\nNih Kak Kontak Owner Saya Jangan Di Spam Kak
`.trim(),    footerText: `${conn.getName(conn.user.jid)}`,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { contextInfo: { mentionedJid: [m.sender]}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
