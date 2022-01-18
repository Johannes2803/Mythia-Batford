let handler = async (m, { conn }) => {
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => `
${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'keluar' : 'masuk'}]\n${global.DATABASE.data.chats[v.jid] == undefined ? global.DATABASE.data.chats[v.jid] = {
      isBanned: false,
      welcome: true,
      detect: true,
      sWelcome: '',
      sBye: '',
      sPromote: '',
      sDemote: '',
      antiLink: true,
      autoread: false,
      broadcast: true,
      clear: false,
      clearTime: (new Date() * 1) + 3600000 * 1,
      delete: true,
      desc: true,
      download: true,
      getmsg: false,
      groupTime: 0,
      stiker: false,
      viewonce: true,
    } : global.DATABASE.data.chats[v.jid].groupTime ? conn.msToDate(global.DATABASE.data.chats[v.jid].groupTime - new Date() * 1) : 'belum diatur'}
${global.DATABASE.data.chats[v.jid].clear ? '✅' : '❌'} otomatis hapus chat
${global.DATABASE.data.chats[v.jid].autoread ? '✅' : '❌'} otomatis membaca pesan
${global.DATABASE.data.chats[v.jid].broadcast ? '✅' : '❌'} pesan siaran
    `.trim()).join`\n\n`
  m.reply(txt)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

module.exports = handler
