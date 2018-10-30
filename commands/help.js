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
    
    .addField("#Profile", '● [لعرض البروفايل الخاص]')
    .addField("#Credits", '● [لعرض رصيدك في البنك]')
    .addField("#Lvl", '● [لعرض لفلك او لفل شخص]')
    .addField("#But", '● [لشراء خلفية من المتجر 100 ريال]')
    .addField("#Joyة", '● [لعطاء شخص اوسمة]')
    .addField("#1", '● [لعرض متجر الخلفيات - صفحة رقم 1]')
    .addField("#2", '● [لعرض متجر الخلفيات - صفحة رقم 2]')
    .addField("#Convert", '● [تحويل مبلغ مالي لأحد الأعضاء]')
    .addField("#Not", '● [لكتابة كلام في خانة المعلومات 200 ريال]')
    .addField("#معلومات", '● [لعرض معلوماتك او معلومات شخص]')
    .addField("#Like", '● [للإعجاب بشخص داخل السيرفر كل 12 ساعة]')
    .addField("#سمعه", '● [اعطاء سمعه]')
    .addField("#سمعة", '● [اعطاء سمعة]')
    .addField("#فانزاتي", '● [لمعرفة عدد الايكات]')
    .addField("#نادي", '● [اكتب ناديك المفضل]')
    .addField("#منصبي", '● [اكتب منصبك]')
  	.addField("#عمري", '● [اكتب عمرك]')
    .addField("#تخصصي", '● [اكتب تخصصك]')
  	.addField("#حكمتي", '● [اكتب حكمتك]')
    .addField("#خاطري", '● [اكتب الي بخاطرك]')
  	.addField("#طموحي", '● [اكتب طموحك]')
    .addField("#قدوتي", '● [اكتب قدوتك]')
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
  name:"Help"
}
