let axios = require("axios")
let fetch = require('node-fetch')
let handler = async (m, { conn, text, args }) => {
	if (!text) throw `Masukkan query!`
              query = args.join(" ")
              get_result = await fetch(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=Dawnfrostkey&query=${text}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`▢ Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`▢ Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`▢ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              conn.sendFile(m.chat, ini_txt, get_result)
   }
handler.command = /^(nekopoisearch)$/
handler.premium = false
module.exports = handler
