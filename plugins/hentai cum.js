async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`, '', `NOO 4NO`, m)
    
    }
    
    handler.help = ['cum']
    
    handler.tags = ['dewasa']
    
    handler.command = /^(cum)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = true
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler