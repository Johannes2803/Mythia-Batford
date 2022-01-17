async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, (`https://hardianto.xyz/api/anime/random?nsfw=girlSolo&apikey=hardianto`), '', `NOO 4NO`, m)
    
    }
    
    handler.help = ['girlsolo']
    
    handler.tags = ['dewasa']
    
    handler.command = /^(girlsolo)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = true
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler