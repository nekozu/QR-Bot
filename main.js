const { Bot } = require('grammy')
const axios = require('axios')

const bot = new Bot(procces.env.bot_token)

bot.command('start', (ctx) => ctx.reply(proccess.env.start_text))

bot.command('read', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              pesan = inputArray.join(" ");                                                                                                                                                                 
    axios.get('http://docs-jojo.herokuapp.com/api/qr_read?image_url='+pesan)
    .then(res => {
     ctx.reply("Hasil: "+res.data.result.raw_text)
    }).catch(e => {
         console.log(e);
   })
})

bot.command('qr', ctx => {
    ctx.reply('Tunggu....')
    ctx.deleteMessage
    let teks1 = ctx.message.text;
    let def = teks1.split("qr ");
    def.shift();
        pesan = def.join(" ");

    ctx.replyWithPhoto('http://docs-jojo.herokuapp.com/api/qrcode?text='+pesan)
})

bot.start();
