let { WAMessageProto, MessageType, generateWAMessageFromContent, relayWAMessage, mentionedJid } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, command, args, text, usedPrefix,  }) => {
const yo = await conn.reply(m.chat, global.wait, m)
const buatpesan = await generateWAMessageFromContent(m.chat, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": "Ahhhhhhhhhhhh",
        "hydratedFooterText": "kontol",
        "hydratedButtons": [
          {
            urlButton: {
                                            displayText: 'test',
                                            url: 'whatsapp://send?text=HI'
                                        }
                                    }, {
                                        callButton: {
                                            displayText: 'call me',
                                            phoneNumber: '+0'
                                        }
                                    }, {
									"quickReplyButton": {
										"displayText": "BUTTON 1",
										"id": ".owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": "BUTTON 2",
										"id": ".docs"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": "BUTTON 3",
										"id": ".sc"
            }
          }
        ]
      }
    }
  }, {})
conn.relayWAMessage(buatpesan)
}

handler.help = ['tes']
handler.tags = ['']
handler.command = /^(tes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler