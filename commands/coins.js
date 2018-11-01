const Discord = require("discord.js");

module.exports.run = async (bot, message, args, sql) => {

 let rows =  sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
    if(rows.length < 1) return message.reply("Refresh Please !").then(msg => {msg.delete(5000)});
  let uCoins = rows.coins;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#00FF00")
  .addField("[**Your Credits** :dollar:  :]", `${uCoins} $`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "credits"
}