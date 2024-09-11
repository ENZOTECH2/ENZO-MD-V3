const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏━━ 𝐌𝐑 𝐀𝐍𝐘𝐖𝐀𝐘 𝐌𝐃 ━━┓
┃   Mode: ${mode}
┃   User : ${s.OWNER_NAME}
┃
┣━ 𝒎𝒓 𝒂𝒏𝒚𝒘𝒂𝒚 𝒃𝒐𝒕 𒈒━➠
┗━━━𒈒𝔠𝔯𝔢𝔞𝔱𝔢𝔡 𝔟𝔶 𝔪𝔯 𝔞𝔫𝔶𝔴𝔞𝔶𒈒━━┛\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣❏ 𝕄ℝ 𝔸ℕ𝕐𝕎𝔸𝕐 𝕄𝔻  
┣❏by mr Anyway Tech
┗━━━━━━━━━━━━━━┛\n




𝙼𝚁 𝙰𝙽𝚈𝚆𝙰𝚈 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂𒈒
`;



    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃ ${cmd}`;

        }

        menuMsg += `
┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏ M༙R༙ A༙N༙Y༙W༙A༙Y༙ M༙D༙ 
┣❏ b͜͡y͜͡ m͜͡r͜͡ a͜͡n͜͡y͜͡w͜͡a͜͡y͜͡
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃powered by mr Anyway Tech 
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *MSELA-CHUI-V2*, déveloper mselachui" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
          
