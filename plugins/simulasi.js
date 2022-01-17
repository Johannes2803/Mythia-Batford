let handler = async (m, { conn, args: [event], text }) => {
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? conn.parseMention(mentions) : []
    let participants = who.length ? who : [m.sender]
    let action = false
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            if (!global.DATABASE.data.chats[m.chat].welcome) return await conn.sendButton(m.chat, 'welcome belum diaktikan!', `${conn.getName(conn.user.jid)}`, 'aktifkan', '.on welcome', m)
            action = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            if (!global.DATABASE.data.chats[m.chat].welcome) return await conn.sendButton(m.chat, 'welcome belum diaktikan!', `${conn.getName(conn.user.jid)}`, 'aktifkan', '.on welcome', m)
            action = 'remove'
            break
        case 'promote':
            if (!global.DATABASE.data.chats[m.chat].welcome) return await conn.sendButton(m.chat, 'detect belum diaktikan!', `${conn.getName(conn.user.jid)}`, 'aktifkan', '.on detect', m)
            action = 'promote'
            break
        case 'demote':
            if (!global.DATABASE.data.chats[m.chat].welcome) return await conn.sendButton(m.chat, 'detect belum diaktikan!', `${conn.getName(conn.user.jid)}`, 'aktifkan', '.on detect', m)
            action = 'demote'
            break
        case 'delete':
            if (global.DATABASE.data.chats[m.chat].delete) return await conn.sendButton(m.chat, 'delete is active!', `${conn.getName(conn.user.jid)}`, 'matikan', '.on antidelete', m)
            deleted = m
            break
        default: 
        if (!/[01]/.test(command)) return m.reply(`
List option: 
add
bye
promote
demote
delete
`.trim())
        throw false
    }
    if (action) return conn.onParticipantsUpdate({
        jid: m.chat,
        participants,
        action
    })
    return conn.onDelete(m)
}
handler.help = ['simulasi <event> [@tag]']
handler.tags = ['group']
handler.command = /^simula(si|te)$/i

module.exports = handler
