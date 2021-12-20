let axios = require("axios");
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let ye = await (await fetch('https://i.pinimg.com/originals/94/e7/21/94e721efd82d3aba7e7da4a0bde1b036.jpg')).buffer()
	axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=HIRO`).then ((res) => {
		
prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 99999999, status: 1,
message: `_Quote: ${res.data.result.quote}_\n\n*• Character: ${res.data.result.character}*\n*• Anime: ${res.data.result.anime} ${res.data.result.episode}*`,
orderTitle: 'B',
sellerJid: '62895603352610@s.whatsapp.net',
thumbnail: ye
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
  })
}   
handler.help = ['quoteanime']
handler.tags = ['quotes']
handler.command = /^(quoteanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler