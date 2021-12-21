let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('lol', '/api/random2/waifu', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json, 'Nieh banh lolinya', '', 'loli again', `${usedPrefix + command}`, m)
}
handler.help = ['loli']
handler.tags = ['fun']
handler.command = /^(loli)$/i

module.exports = handler
