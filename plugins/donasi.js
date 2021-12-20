let { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs')
let handler = async (m, { conn }) => {
	

let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, '┏━━⬣ 𝗗𝗢𝗡𝗔𝗦𝗜\n┃\n┃⬡ TRI : 0895612153565\n┃⬡ GOPAY : 62895612153565\n┃⬡ DANA : 62895612153565\n┃⬡ SAWERIA : https://tinyurl.com/ygdcucr4\n┗⬣', `${pp}`, `Created By Johannes`.trim(), 'MENU', '#allmenu', { quoted: m })

  }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
