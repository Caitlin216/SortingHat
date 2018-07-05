const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Roleplayer')
    message.member.addRole(Role)

    message.reply("you are a wizard!");
}

module.exports.help = {
    name: "roleplayer"
}
