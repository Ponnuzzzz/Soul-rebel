const Asena = require('../events');

const { MessageType, Mimetype } = require('@adiwajshing/baileys');

const got = require('got');

const Config = require('../config');

const LOAD_ING = "*wait... Trying To Find*"

const axios = require('axios')

const Axios = require('axios')

Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: 'search your song' , dontAddCommandList: true }, async (message, match) => {

		await message.client.sendMessage(message.jid, '*Processing.....*' , MessageType.text, { quoted: message.data });

	

	const {data} = await axios(`https://zenzapi.xyz/api/play/playmp3?query=${match[1]}&apikey=whitedevil-terrorboy`)

	

        const { status, result } = data

	

	var img = await Axios.get(`${result.thumb}`, {responseType: 'arraybuffer'})

	

        if(!status) return await message.sendMessage('*NO RESULT FOUND*')

	

        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'

        msg +=  `TITLE :${result.title}\n\n`


        msg += '```'

         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg })

        });
