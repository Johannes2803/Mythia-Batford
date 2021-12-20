let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, `Iya Kak? ${conn.getName(conn.user.jid)} Online Ketik Aja *#menu* Untuk Melihat List Menu *${conn.getName(conn.user.jid)}* :)\n\nSilahkan Ketik #menu`, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/62895603352610?text=Hai.com',
mediaType: 2,
title: `Simple Bot Whatsapp`,
body: '© YUKIBOT',
thumbnailUrl: 'https://i.ibb.co/TYBsTsV/1890eb474e10.jpg',
}}}) 
}

handler.customPrefix = /^(bot|Bot)?$/i
handler.command = new RegExp

module.exports = handler