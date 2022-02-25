const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'menu', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "💙ᴀʙᴜ ɪs ᴍʏ ᴏᴡɴᴇʀ❤️";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'alive', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "💙ᴀʙᴜ ɪs ᴍʏ ᴏʀɢɪɴᴀʟ ᴄʀᴇᴀᴛᴇʀ❤️";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'sana', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "💙sᴀɴᴀ ᴀʙᴜᴠɪɴᴛᴇ ʙᴏᴛ ᴀɴ 💖ʙᴇsᴛ ʙɢᴍ ʙᴏᴛ ᴀɴ❤️";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'abu', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "❤️ᴀʙᴜ sᴇʀ ᴀɴ ᴇɴᴛᴇ ᴏʀɢɪɴᴀʟ ᴄʀᴇᴀᴛᴇʀ💖";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    


}
