const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','DJ')
    message.member.addRole(Role)

    message.reply("please don't stop the music, music, music~🎵");
}

module.exports.help = {
    name: "dj"
}
