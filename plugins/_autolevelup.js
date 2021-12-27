let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let name = conn.getName(m.sender)
	let user = global.DATABASE._data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
	if (before !== user.level) {
            m.reply(`
「 SELAMAT 」
➸ Name : ${name}
➸ XP : ${user.exp}
➸ Level :*${before}* -> *${user.level}* 
Congratulations 🎉
	`.trim())
        }
}

module.exports = handler
