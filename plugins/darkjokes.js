async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=dappakntlll`, '', `Dark?`, m)
    
    }
    
    handler.help = ['Daek Jokes']
    
    handler.tags = ['internet']
    
    handler.command = /^(darkjokes)$/i
    
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