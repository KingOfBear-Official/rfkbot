let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    let url = await fetch(`https://hardianto.xyz/api/anime/loli?apikey=hardianto`)
    await conn.sendButtonImg(m.chat, url,  footer, 'Next', `${usedPrefix + command}`, m, 0, { thumbnail: await (await fetch(url)).buffer() })
    // await conn.sendFile(m.chat, url, '', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
