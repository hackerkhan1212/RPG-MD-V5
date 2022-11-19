import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Enter your song name', m)

  await m.reply('Searching...')
    let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolkeysapi}&query={text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.external_urls.preview_url)).buffer()
    let hasil = `*── 「 Spotify 」 ──*

➸ *Song name*: *${json.result.title}
➸ *URL*: *${json.result.link}
➸ *Song ID:*${json.result.id}
➸ *Artist: *${json.result.artists}


    conn.sendFile(m.chat, thumb, 'Spotify,mp3', hasil, m)
 
handler.help = ['spotifyserach']
handler.tags = ['internet']
handler.command = /^(spotify?search|search?spotify)$/i
handler.limit = true
export default handler
