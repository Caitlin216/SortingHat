const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#CD853F")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .addField("Ceated By", "Sabrina https://www.behance.net/xabry or https://www.instagram.com/xabryy/");

        return message.channel.send(botembed).then(msg => {msg.delete(10000)});
}

module.exports.help = {
    name: "botinfo"
}