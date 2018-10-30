
const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, sql) => {
  let note = args.join(" ");
  if(message.mentions.users.size >= 1) return message.reply("Error");
  if(note.length < 1) return message.reply("`Dusment Please`")
  if(note.length > 50) return message.reply("Please Type No More 50 Nembers")

  let rows = sql.prepare(`SELECT * FROM about WHERE UserID = '${message.author.id}'`).get()
  let sqlstr;
  let age = rows.age;

  sqlstr = `UPDATE about SET words = "${note}" WHERE UserID = '${message.author.id}'`;
  sql.prepare(sqlstr).run()

  return message.reply("Terminé").then(msg => {msg.delete(5000)});

}

module.exports.help = {
name:"words"
}
