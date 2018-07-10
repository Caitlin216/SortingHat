const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Character #1')
    message.member.addRole(Role)

    message.reply("you just got the role for your 1st Role-play character!");
}

module.exports.help = {
    name: "oc1"
}
