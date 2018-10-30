const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {

  if (talkedRecently.has(message.author.id)) {
            
    let timeoute = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Please White 60Min !");
            message.channel.send(timeoute).then(msg => {msg.delete(506600)});
    } else {
      message.delete(9666000)
    let helpembed1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setDescription("~ أوامر بوت البروفايل ~")
    .setColor("RANDOM")
    
    .addField(".profile", '● [لعرض البروفايل الخاص]')
    .addField(".credits", '● [لعرض رصيدك في البنك]')
    .addField(".lvl", '● [لعرض لفلك او لفل شخص]')
    .addField(".buy", '● [لشراء خلفية من المتجر 100 ريال]')
    .addField(".awsmah", '● [لعطاء شخص اوسمة]')
    .addField(".1", '● [لعرض متجر الخلفيات - صفحة رقم 1]')
    .addField(".2", '● [لعرض متجر الخلفيات - صفحة رقم 2]')
    .addField(".convert", '● [تحويل مبلغ مالي لأحد الأعضاء]')
    .addField(".not", '● [لكتابة كلام في خانة المعلومات 200 ريال]')
    .addField(".about", '● [لعرض معلوماتك او معلومات شخص]')
    .addField(".like", '● [للإعجاب بشخص داخل السيرفر كل 12 ساعة]')
    .addField(".rep", '● [اعطاء سمعه]')
    .addField(".rep2", '● [اعطاء سمعة]')
    .addField(".fan", '● [لمعرفة عدد الايكات]')
    .addField(".club", '● [اكتب ناديك المفضل]')
    .addField(".carer", '● [اكتب منصبك]')
  	.addField(".age", '● [اكتب عمرك]')
    .addField(".study", '● [اكتب تخصصك]')
  	.addField(".life", '● [اكتب حكمتك]')
    .addField(".words", '● [اكتب الي بخاطرك]')
  	.addField(".dream", '● [اكتب طموحك]')
    .addField(".model", '● [اكتب قدوتك]')
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);
    message.channel.send(helpembed1);
    }
  talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
}
module.exports.help = {
  name:"help"
}
