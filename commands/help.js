const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("Sorting Hat at your service! Here is a list of commands you can use.")
    .setThumbnail(bicon)
    .setColor("#CD853F")
    .addField("General commands", "!botinfo, !serverinfo, !report @username <reason>, !8ball <question>, !roll, !cat, !doggo,", true)
    .addField("Admin commands", "!prefix <desired prefix>, !addrole @username <role>, !removerole @username <role>, !tempmute @username <time in s or d>, !ban @username <reason>, !clear <amount msg>, !say <sentence>", true)
    .setFooter("For more information about certain command(s) go to an admin or view the commands channel.")

    message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}
