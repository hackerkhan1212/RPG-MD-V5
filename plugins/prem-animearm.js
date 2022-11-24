import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(`https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${global.lolkeysapi}`)
let json = res.data
let url = json.url
conn.sendButton(m.chat, `*${command}*`.trim(), author, url, [['🔄 NEXT 🔄', `/${command}`]], m)
}
handler.help = ['animearm']
handler.tags = ['nsfw', 'premium']
handler.command = /^(animearm)$/i
export default handler
