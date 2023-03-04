const { Telegraf } = require('telegraf');
const axios = require('axios');
let binarysearchjs = `function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1; // target not found
}
  `

const bot = new Telegraf('TOKEN HERE
');
bot.start((ctx) => ctx.reply('Welcome to the new bot developed by Harsh, This bot will give you codes in Javascript.Here is the command list /binarysearchjs  /whomadethis  /binarytreejs ')); //starting
bot.command('binarysearchjs', (ctx) =>ctx.reply(binarysearchjs)); //commands 
bot.command('whomadethis', (ctx)=> ctx.reply("harsh balwani"));
bot.command('binarytreejs', async(ctx) =>{
    const response =await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js')
    console.log("done");
    return ctx.reply(response.data);
}) 
bot.on('sticker',(ctx) =>ctx.reply('😊'));
bot.launch();
