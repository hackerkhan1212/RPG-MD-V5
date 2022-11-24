import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${global.lolkeysapi}`)
let json = res.data
let url = json.url
conn.sendButton(m.chat, `*${command}*`.trim(), author, url, [['🔄 NEXT 🔄', `/${command}`]], m)
}
handler.help = ['animethighss']
handler.tags = ['nsfw', 'premium']
handler.command = /^(animethighss)$/i
export default handler
