"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '> 𝙼𝚁 𝙰𝙽𝚈𝚆𝙰𝚈 𝙼𝙳 𝚃𝙴𝚂𝚃𝙸𝙽𝙶* \n\n\n ' + "𝔻𝕆ℕ𝕋 𝔼𝕍𝔼ℝ 𝕋ℝ𝕐 𝕋ℍ𝕀𝕊, 𝔸𝕄 𝕋ℍ𝔼 𝔹𝔼𝕊𝕋 𝕌𝕊𝔼ℝ 𝔹𝕆𝕋 \n\n";
    let d = '> 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚋𝚢 𝚖𝚛 𝚜𝚒𝚖𝚘𝚗 𝚊𝚗𝚍 𝚑𝚒𝚜 𝚝𝚎𝚊𝚖';
    let varmess = z + d;
    var img = 'https://i.imgur.com/6nbqZRT.jpeg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Mr-anyway-tech* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *mranyway*'
      let varmess=z+d
      var img='https://telegra.ph/file/001964ff948602d0c868f.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
