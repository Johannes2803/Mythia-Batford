let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
let paus = global.DATABASE._data.users[m.sender].paus
let kepiting = global.DATABASE._data.users[m.sender].kepiting
let gurita = global.DATABASE._data.users[m.sender].gurita
let cumi = global.DATABASE._data.users[m.sender].cumi
let buntal = global.DATABASE._data.users[m.sender].buntal
let dory = global.DATABASE._data.users[m.sender].dory
let lumba = global.DATABASE._data.users[m.sender].lumba
let lobster = global.DATABASE._data.users[m.sender].lobster
let hiu = global.DATABASE._data.users[m.sender].hiu
let udang = global.DATABASE._data.users[m.sender].udang
let ikan = global.DATABASE._data.users[m.sender].ikan
let orca = global.DATABASE._data.users[m.sender].orca

let zer = `
*《 ISI KOLAM MU 》*
    
 *🐋 = [ ${paus} ] Ekor Paus*
 *🦀 = [ ${kepiting} ] Ekor Kepiting*
 *🐙 = [ ${gurita} ] Ekor Gurita*
 *🦑 = [ ${cumi} ] Ekor Cumi Cumi*
 *🐡 = [ ${buntal} ] Ekor Buntal*
 *🐠 = [ ${dory} ] Ekor Dory*
 *🐬 = [ ${lumba} ] Ekor Lumba Lumba*
 *🦞 = [ ${lobster} ] Ekor Lobster*
 *🦈 = [ ${hiu} ] Ekor Hiu*
 *🦐 = [ ${udang} ] Ekor Udang*
 *🐟 = [ ${ikan} ] Ekor Ikan*
 *🐳 = [ ${orca} ] Ekor Orca*   
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['kolam']
handler.customPrefix = ['kolam']
handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
handler.register = false

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
