async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://leyscoders-api.herokuapp.com/api/memeindo?apikey=dappakntlll`, '', `INI MEME?`, m)
    
    }
    
    handler.help = ['memeindo']
    
    handler.tags = ['internet']
    
    handler.command = /^(memeindo)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false

    handler.limit = true
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler