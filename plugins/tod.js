let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  if (/^tod$/i.test(command)) {
    conn.send3Button(m.chat, 'Truth or Dare', footer, 'Truth', '#truth', 'Dare', '#dare', 'RANDOM', `${pickRandom(['#dare', '#truth'])}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})
  }
  if (/^truth$/i.test(command)) {
  let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.truth)}”`, m)
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
//https://sumsel-tribunnews-com.cdn.ampproject.org/v/s/sumsel.tribunnews.com/amp/2020/05/14/pertanyaan-dan-tantangan-truth-or-dare-seru-dan-aman-untuk-mencairkan-suasana?amp_js_v=a6&amp_gsa=1&usqp=mq331AQHKAFQArABIA%3D%3D#aoh=16158517341963&referrer=https%3A%2F%2Fwww.google.com&amp_tf=Dari%20%251%24s&ampshare=https%3A%2F%2Fsumsel.tribunnews.com%2F2020%2F05%2F14%2Fpertanyaan-dan-tantangan-truth-or-dare-seru-dan-aman-untuk-mencairkan-suasana
//https://psycatgames-com.cdn.ampproject.org/v/s/psycatgames.com/id/magazine/party-games/truth-or-dare/?amp_js_v=a6&amp_gsa=1&usqp=mq331AQHKAFQArABIA%3D%3D#aoh=16158517866717&amp_ct=1615851787919&referrer=https%3A%2F%2Fwww.google.com&amp_tf=Dari%20%251%24s&ampshare=https%3A%2F%2Fpsycatgames.com%2Fid%2Fmagazine%2Fparty-games%2Ftruth-or-dare%2F
global.truth = [
    "Acara tv apa yang paling kamu benci? Berikan alasannya!",
    "Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
    "Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?",
    "Apa hal paling memalukan dari dirimu?",
    "Apa hal paling memalukan dari temanmu?",
    "Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?",
    "Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
    "Apa hal terbodoh yang pernah kamu lakukan?",
    "Apa hal terbodoh yang pernah kamu lakukan?",
    "Apa ketakutan terbesar kamu?",
    "Apa mimpi terburuk yang pernah kamu alami?",
    "Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?",
    "Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
    "Apa sifat terburukmu menurut kamu?",
    "Apa sifat yang ingin kamu rubah dari dirimu?",
    "Apa sifat yang ingin kamu rubah dari temanmu?",
    "Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?",
    "Apa yang kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.",
    "Apakah hal yang menurutmu paling menonjol dari dirimu?",
    "Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?",
    "Bagian tubuhmu mana yang paling kamu benci?",
    "Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?",
    "Deksripsikan teman terdekat mu!",
    "Deskripsikan dirimu dalam satu kata!",
    "Film dan lagu apa yang pernah membuat kamu menangis?",
    "Hal apa yang kamu rahasiakan sampe sekarang dan gak ada satu orangpun yang tau?",
    "Hal paling romantis apa yang seseorang (lawan jenis) pernah lakuin atau kasih ke kamu?",
    "Hal-hal menjijikan apa yang pernah kamu alami ?",
    "Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?",
    "Jika punya kekuatan super/ super power ingin melakukan apa",
    "Jika sebentar lagi kiamat, apa yang kamu lakukan ?",
    "Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?",
    "Kamu pernah mencuri sesuatu gak?",
    "Apakah kamu takut mati? kenapa?",
    "Kapan terakhir kali kamu menangis dan mengapa?",
    "Apa kemampuan spesial kamu apa?",
    "Kok bisa suka sama orang yang kamu sukai?",
    "Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?",
    "Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",
    "Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman yang sedang duduk di sebelahmu? Dan kenapa?",
    "Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa",
    "Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?",
    "Pilih PACAR atau TEMAN ? why?",
    "Quote apa yang paling kamu ingat dan kamu suka?",
    "Rahasia apa yang belum pernah kamu katakan sampai sekarang kepada teman mu ?",
    "Siapa panutan yang benar-benar menjadi panutanmu?",
    "Siapa di antara temanmu yang kamu pikir matre?",
    "Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling nggak banget?",
    "Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya jelek banget?",
    "Siapa mantan terindah mu? dan mengapa kalian putus ?!",
    "Siapa nama artis yang pernah kamu bucinin diam-diam?",
    "Siapa nama guru cowok yang pernah kamu sukai dulu?",
    "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
    "Siapa nama orang (lawan jenis) yang menurutmu akan asyik bila dijadikan pacar?",
    "Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus lawan jenis)?",
    "Siapa nama orang yang pernah kamu kepoin diam-diam?",
    "Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?",
    "Siapa orang yang paling menjengkelkan di antara teman teman mu ? alasannya!",
    "Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?",
    "Siapa yang paling mendekati tipe pasangan idealmu di sini",
    "Apa hal pertama yang akan Anda lakukan jika Anda bangun sebagai lawan jenis?",
    "Pernahkah Anda membiarkan orang lain mendapat masalah karena sesuatu yang Anda lakukan?",
    "Kapan terakhir kali Anda mengompol?",
    "Apa yang paling kamu impikan dari tidur?",
    "Jika Anda akan menghasilkan uang secara ilegal, bagaimana Anda membuatnya?",
    "Apa yang kekanak-kanakan yang masih Anda lakukan?",
    "Jika Anda buta, siapa yang akan menjadi anjing pemandu Anda?",
    "Apa yang paling mengesankan Anda?",
    "Jika Anda diizinkan untuk menggunakan hanya 3 kata untuk sisa malam mulai sekarang - yang mana itu?",
    "Jika Anda seorang diktator, hukum mana yang akan Anda undang terlebih dahulu?",
    "Jika Anda hidup selama era Nazi, siapa Anda?",
    "Apa pengalaman paling memalukan di waktu sekolah / waktu belajar / pendidikan / tahun lalu?",
    "Hewan apa yang paling cocok untukmu dan mengapa?",
    "Apa kencan terburukmu?",
    "Siapa yang ingin kamu cium sekarang?",
    "Apa rahasia kamu, fantasi gelap?",
    "Apakah Anda lebih suka tato pantat Anda atau menusuk lidah Anda?",
    "Apakah kamu selalu setia?",
    "Apakah Anda memiliki naksir remaja?",
    "Di orang mana kamu jatuh cinta?",
    "Selebritas mana yang ingin kamu kencani?",
    "Apakah kamu pernah melakukan ghosting?",
    "Apa aib yang kamu sembunyikan dari kami?",
    "Berapa jumlah mantanmu?",
    "Siapa orang yang ingin kamu jadikan pacar?",
    "Siapa mantan terindahmu?",
    "Di antara kita, siapa orang yang menurutmu paling baik dan paling buruk sifatnya?",
    "Kapan terakhir kali kamu ngompol?",
    "Apa mimpi paling aneh yang pernah kamu alami?",
    "Apa kebohongan terbesar yang pernah kamu katakan kepada orangtuamu?",
    "Siapa orang yang paling sering kamu chat?",
    "Siapa orang yang diam-diam kamu sukai?",
    "Kalau kamu bisa jadi tidak terlihat, apa hal pertama yang akan kamu lakukan?",
    "Kenapa kamu putus dengan mantan yang sebelumnya?",
    "Apa penyesalan terburukmu?",
    "Apa kebiasaan terburukmu?",
    "Apa hal paling menjijikkan yang pernah kamu lakukan?",
    "Apa hal paling memalukan yang pernah kamu lakukan? Kapan?",
    "Apa pendapatmu tentang perselingkuhan?",
    "Apa rahasia yang tidak pernah kamu ceritakan kepada siapapun?",
    "Apa waasa saat paling memalukan dalam hidup Anda?"]
  
  }
  if (/^dare$/i.test(command)) {
    let res = await fetch('https://raw.githubusercontent.com/saipulanuar/Truth-Or-Dare/main/dare.js')
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.message == "") throw json
    conn.send2Button(m.chat, json.message, footer, 'Truth', '#truth', 'Dare', '#dare', m, { contextInfo: { forwardingScore: 999, isForwarded: true }})


  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
