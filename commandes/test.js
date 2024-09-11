"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *MSELA-CHUI-V2* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *Mselachui Tech*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/001964ff948602d0c868f.jpg';
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
   let z ='Salut je m\'appelle *MSELA-CHUI-V2* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *mselachui*'
      let varmess=z+d
      var img='https://telegra.ph/file/001964ff948602d0c868f.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
