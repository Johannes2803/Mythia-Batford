let { Presence } = require('@adiwajshing/baileys')


let handler = async (m, { conn, participants }) => {

		await conn.updatePresence(m.chat, Presence.composing)

		let member = participants.map(u => u.jid)

		let list = []

		for (let i of member) {

			list.push({

				"displayName": await conn.getName(i, true),

				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${await conn.getName(i, true)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`

			})

		}

		if (list.length == 1) return conn.sendContact(m.chat, member[0].split`@`[0], conn.getName(member[0], true), m)

		await conn.sendMessage(m.chat, { "displayName": `${list.length} Contact`, "contacts": list }, 'contactsArrayMessage', { contextInfo: { mentionedJid: member }, quoted: m })

}
handler.command = ('saveall')
handler.tags = ['group']
handler.group = true
handler.rowner = true

module.exports = handler