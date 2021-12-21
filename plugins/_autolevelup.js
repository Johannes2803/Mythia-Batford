let handler = m => m
let levelling = require('../lib/levelling')
handler.before = m => {
    let user = global.DATABASE._data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let str = `
「 SELAMAT 」\n
➸ Name : @${m.sender.split`@`[0]}
➸ XP : ${user.exp}
➸ Level :*${before}* -> *${user.level}* 
Congratulations 🎉
`.trim()
        conn.sendButton(m.chat, str, 'Made By Johannes', 'PROFILE', '#profile', {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handlerlet handler = m => m
let levelling = require('../lib/levelling')
handler.before = m => {
    let name = conn.getName(m.sender)
    let user = global.DATABASE._data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let str =  `
「 SELAMAT 」
➸ Name : ${name}
➸ XP : ${user.exp}
➸ Level :*${before}* -> *${user.level}* 
Congratulations 🎉
 `.trim() 
        conn.sendMessage(m.chat, str, m, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handler
