let cp = require('child_process')
let { promisify } = require('util')
let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
const anu = {

	key : {

           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Hi world 👋',
                    jpegThumbnail: image2
                          }
                        }
                      }
let { performance } = require('perf_hooks')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
runtime = process.uptime()
					teks = `${kyun(runtime)}`
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return /*conn.reply(m.chat, util.format(...args), m)*/
  conn.sendMessage(m.chat, 'Executing...', 'conversation', {quoted: anu, thumbnail: global.image2, contextInfo:{externalAdReply: {title: 'YUZUKI CHOCO', sourceUrl: 'https://github.com/johannes2803', body: `Runtime: ${teks}\nNothing`, thumbnail: image3}}})
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + text.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())  /*conn.reply(m.chat, util.format(...args), m)*/ conn.sendMessage(m.chat, stdout, 'conversation', {quoted: anu, thumbnail: global.thumb, contextInfo:{externalAdReply: {title: 'YUZUKI CHOCO', sourceUrl: 'https://github.com/Johannes2803', body: `Runtime: ${teks}\nNothing`, thumbnail: image3}}})
    if (stderr.trim())  /*conn.reply(m.chat, util.format(...args), m)*/ conn.sendMessage(m.chat, stderr, 'conversation', {quoted: anu, thumbnail: global.thumb, contextInfo:{externalAdReply: {title: 'YUZUKI CHOCO', sourceUrl: 'https://github.com/johannes2803', body: `Runtime: ${teks}\nNothing`, thumbnail: image3}}})
  }
}
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.rowner = true
module.exports = handler
