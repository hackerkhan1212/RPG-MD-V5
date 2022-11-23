import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗INFO❗] Enter the name of the song you want to search for\n\n*—◉ Example:\n#play.1 Good Feeling - Flo Rida*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Wait, Audio is Processing..._⏳*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'AUDIO',
body: 'YukiBot',         
previewType: 0, thumbnail: await (await fetch(`https://ibb.co/4ZtqtRc`)).buffer(),
sourceUrl: `https://youtu.be/pwLZpdfO8AU`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳ Wait, the video is in progress...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'VIDEO',
body: 'ᴹᴿ᭄ 𝕀𝕥𝕩_𝕚𝕓𝕣𝕒𝕙𝕚𝕞 ×፝֟͜×',         
previewType: 0, thumbnail: await (await fetch('https://telegra.ph/file/3b7ec1308edb07983efef.png')).buffer(),
sourceUrl: `https://youtu.be/pwLZpdfO8AU`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `_ᴹᴿ᭄ 𝕀𝕥𝕩_𝕚𝕓𝕣𝕒𝕙𝕚𝕞 ×፝֟͜×_`, m)}
}catch(e){
m.reply('*[❗INFO❗] Error, unable to search for the song*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <text>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
