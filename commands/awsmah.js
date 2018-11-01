const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("");
    let helpembed1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTitle("~ أوامر بوت البروفايل ~")
    .setDescription(`.awsmah @user 0 0 0 0 0 0`)
    .setColor("RANDOM")
    .addField("**  إستبدل أحد الأصفار برقم الوسام مثال **", `.awsmah @user 0 0 0 0 3 1`)
    .addField("● [مربع فارغ]", '0')
    .addField("● [علم السعودية]", '1')
    .addField("● [علم الكويت]", '2')
    .addField("● [Steam]", '3')
    .addField("● [علم الإمارات]", '4')
    .addField("● [علم البحرين]", '5')
    .addField("● [Golden Mic]", '6')
    .addField("● [علم العراق]", '7')
    .addField("● [لبنان]", '8')
    .addField("● [مصر]", '9')
    .addField("● [المغرب]", '10')
	.addField("● [الجزائر]", '11')
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);
    message.author.send(helpembed1);
}
module.exports.help = {
  name:"awsmah"
}
