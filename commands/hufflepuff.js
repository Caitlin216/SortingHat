const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let role = member.guild.roles.find('name');
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
    message.reply("Hmm...okay...I can see you are optimistic and kind-hearted...hmm...I know there is a house that can fit in you in...go for HUFFLEPUFF!!!");
}

module.exports.help = {
    name: "hufflepuff"
}
