let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/sbRTnKz/qriss1.jpg`)).buffer(), `
┌〔 Donasi • Emoney 〕
├ PULSA : VIA QR AJA GAK MAIN PULSA
├ OVO & DANA : [0882-7926-8363]
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
