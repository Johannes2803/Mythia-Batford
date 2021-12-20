let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Contoh:\n${usedPrefix + command} sticker`
    let { total, success, last, lastSuccess } = global.DATABASE.data.stats[args[0] + '.js']
    m.reply(`
*Plugin ${args[0]}*
*Total :* ${total}
*Berhasil :* ${success}
*Terakhir Kali Digunakan :* ${new Date(last)}
*Terakhir Kali Berhasil :* ${new Date(lastSuccess)}
`.trim())
}
handler.help = ['plugins']
handler.tags = ['owner']
handler.command = /^plugins$/i
module.exports = handler