
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Where is the picture?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Type ${mime} not supported!`
    if (!text) return m.reply(`Reply pictures with commands
    ${usedPrefix + command} effect
*List effect:*
angie
aria
attic
black-and-white
chrome-1970
contrast-bandw
creamy
duotone
eva
golden-hour
hana
hdr
japanese
lana
lavender
lemonade
light-leak
lisa
lomo
milk
molly
monochrome
morning
movie
orton
paretro
perfect-bandw
plumy
retrolga
ruby
sand
sapphire
sepia
soft-sepia
solarize
sphinx
venus
viewfinder
warm-sunset`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let images = `https://violetics.pw/api/photofilter/${encodeURIComponent(text)}?apikey=${global.violetics}&image=${encodeURIComponent(url)}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
//lo mau apa??
handler.help = ['phfilter'].map(v => v + ' <caption|reply>')
handler.tags = ['maker']
handler.command = /^(phfilter)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
