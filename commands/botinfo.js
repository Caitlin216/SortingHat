const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#CD853F")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .addField("Ceated By", "Sabrina#0710 [Behance](https://www.behance.net/xabry) [Instagram](https://www.instagram.com/xabryy/)")
        .addField("Special Thanks To", "Zenevee#9561!");
        
        return message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}
