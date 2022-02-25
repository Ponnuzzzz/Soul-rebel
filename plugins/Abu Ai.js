/* Codded by Phaticusthiccy
eva artificial intelligence was codded by Phaticusthiccy
also 90% of thise code is done by Phaticusthiccy
re-coded or modified by Ajx-Abu
to bring new ai
*/


const Asena = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_eva = ''
if (conf.LANG == 'TR') vtalk_dsc = 'Eva sesli sohbetini başlatır.', reply_eva = '*Herhangi Bir Sesli Mesaja Yanıt Verin!*'
if (conf.LANG == 'EN') vtalk_dsc = 'Starts to Eva voice chat.', reply_eva = '*Reply to Any Voice Message!*'
if (conf.LANG == 'AZ') vtalk_dsc = 'Eva səsli söhbətinə başlayır.', reply_eva = '*Hər hansı bir səsli mesaja cavab verin!*'
if (conf.LANG == 'PT') vtalk_dsc = 'Começa o bate-papo por voz de Eva.', reply_eva = '*Responder a qualquer mensagem de voz!*'
if (conf.LANG == 'RU') vtalk_dsc = 'Запускает голосовой чат Eva.', reply_eva = '*Ответьте на любое голосовое сообщение!*'
if (conf.LANG == 'HI') vtalk_dsc = 'Eva ध्वनि चैट प्रारंभ करता है', reply_eva = '*किसी भी ध्वनि संदेश का उत्तर दें!*'
if (conf.LANG == 'ES') vtalk_dsc = 'Comienza con el chat de voz de Eva.', reply_eva = '*¡Responde a cualquier mensaje de voz!*'
if (conf.LANG == 'ML') vtalk_dsc = 'Eva വോയ്‌സ് ചാറ്റിലേക്ക് ആരംഭിക്കുന്നു.', reply_eva = '*ഏത് വോയ്‌സ് സന്ദേശത്തിനും മറുപടി നൽകുക!*'
if (conf.LANG == 'ID') vtalk_dsc = 'Mulai obrolan suara Eva.', reply_eva = '*Balas Pesan Suara Apapun!*'

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

Asena.addCommand({on: 'text', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('abu') && conf.TALKING_ABU !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'
        var finm = message.message.replace('abu', '').replace(' ', '')   
        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
        if (ainame !== 'Asena') return;
        var ldet = lngDetector.detect(finm)
        var trmsg = ''
        if (ldet[0][0] !== 'english') {
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        } else { trmsg = finm }
        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=161443&key=o4TmUKcCYDFuU5KL&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
            if (conf.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.cnt }
            await message.client.sendMessage(message.jid,'*' + fins +'*', MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*💖ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝✰ͣᴀʙᴜ✰💖*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 3000, "width": 3000, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Abu.png')}}}});
        })
    }
}));
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.TALKING_ABU == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'                       
                        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                        if (ainame !== 'Asena') return;
                        var finm = message.message
                        var ldet = lngDetector.detect(finm)
                        var trmsg = ''
                        if (ldet[0][0] !== 'english') {
                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        } else { trmsg = finm }
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=161443&key=o4TmUKcCYDFuU5KL&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (conf.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            await message.client.sendMessage(message.jid,'*' + fins +'*', MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*💖ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝✰ͣᴀʙᴜ✰💖*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 3000, "width": 3000, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Abu.png')}}}});
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                    var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                    if (ainame !== 'Asena') return;
                    var finm = message.message
                    var ldet = lngDetector.detect(finm)
                    var trmsg = ''
                    if (ldet[0][0] !== 'english') {
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    } else { trmsg = finm }
                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=161443&key=o4TmUKcCYDFuU5KL&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,'*' + fins +'*', MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*💖ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝✰ͣᴀʙᴜ✰💖*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 3000, "width": 3000, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Abu.png')}}}});
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;
                var finm = message.message
                var ldet = lngDetector.detect(finm)
                var trmsg = ''
                if (ldet[0][0] !== 'english') {
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                } else { trmsg = finm }
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=161443&key=o4TmUKcCYDFuU5KL&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,'*' + fins +'*', MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*💖ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝✰ͣᴀʙᴜ✰💖*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 3000, "width": 3000, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Abu.png')}}}});
                })
            }
        }

}));
Asena.addCommand({ pattern: 'vtalk$', desc: vtalk_dsc,dontAddCommandList: true, fromMe: wk }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,reply_eva, MessageType.text, { quoted: message.data }) 
    try {
        const file = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        })
        
        convertToWav(file)
            .on('end', async () => {
                const recognizedText = await recognizeAudio()
                
                var ssc = ''
                ceviri = await translatte(recognizedText, {from: 'auto', to: 'EN' });
                if ('text' in ceviri) {
                    ssc = ceviri.text
                }
                var unique_ident = message.client.user.jid.split('@')[0]
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'       
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;
        
                var son = encodeURI(ssc)
                await axios.get('http://api.brainshop.ai/get?bid=161443&key=o4TmUKcCYDFuU5KL&uid=' + unique_ident + '&msg=' + son).then(async (response) => {
                    var trmsg = ''
                    cevir = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                    if ('text' in cevir) {
                        trmsg = cevir.text
                    }
            
                    let 
                        LANG = conf.LANG.toLowerCase(),
                        ttsMessage = trmsg,
                        SPEED = 1.0
                    var buffer = await googleTTS.synthesize({
                        text: ttsMessage,
                        voice: LANG
                    });
            
                    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
                }).catch(async (error) => {
	            console.log(error)
                });
        });
    } catch (err) { console.log(err) }
}));
var fulleva_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
if (conf.LANG == 'TR') {
    fulleva_dsc = 'Tam fonksiyonel Abu özelliklerini aktif eder. Hesabınızı bir chatbota dönüştürün!'
    already_on = 'Abu yapay zekası halihazırda tüm fonksiyonları etkin.'
    already_off = 'Abu yapay zekası halihazırda yarı fonksiyonel çalışıyor.'
    succ_on = 'Abu, Tam Fonksiyonel Olarak Açıldı! Lütfen Biraz Bekleyin! ✅'
    succ_off = 'Abu, Yarı Fonksiyonel Olarak Ayarlandı! Lütfen Biraz Bekleyin! ☑️'
}
if (conf.LANG == 'EN') {
    fulleva_dsc = 'Activates full functional Abu features. Turn your account into a ai chatbot!'
    already_on = 'Abu artificial intelligence is already fully functional.'
    already_off = 'Abu artificial intelligence is currently running semi-functional.'
    succ_on = 'Abu Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Abu Set to Semi-Functional! Please wait a bit! ☑️'
}
if (conf.LANG == 'ML') {
    fulleva_dsc = 'പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായ Abu സവിശേഷതകൾ സജീവമാക്കുന്നു. നിങ്ങളുടെ അക്കൗണ്ട് ഒരു ചാറ്റ്ബോട്ടാക്കി മാറ്റുക!'
    already_on = 'Abu കൃത്രിമബുദ്ധി ഇതിനകം പൂർണ്ണമായി പ്രവർത്തിക്കുന്നു.'
    already_off = 'Abu AI നിലവിൽ സെമി-ഫംഗ്ഷണൽ ആണ്.'
    succ_on = 'Abu പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായി തുറന്നു! കുറച്ച് കാത്തിരിക്കൂ! ✅'
    succ_off = 'സെമി-ഫങ്ഷണൽ ആയി Abu സജ്ജമാക്കുക! കുറച്ച് കാത്തിരിക്കൂ! ☑️'
}

Asena.addCommand({ pattern: 'abuser on ?(.*)', desc: fulleva_dsc, fromMe: true,dontAddCommandList: true, usage: '.abuser on / off' }, (async (message, match) => {
    var abuser_status = `${conf.TALKING_ABU}`
    if (match[1] == 'on') {
        if (abuser_status == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['TALKING_ABU']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (lulu_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['TALKING_ABU']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    }
}));
