const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //let role = args.join(" ");
    //if(!role) return message.reply("Specify a role!");
    let role = message.guild.roles.find(`name`, role);
    if(!role) return message.reply("Couldn't find that role.");

    await(member.addRole(role.id));
    message.reply("Hmm...okay...I can see you are optimistic and kind-hearted...hmm...I know there is a house that can fit in you in...go for HUFFLEPUFF!!!");
}

module.exports.help = {
    name: "hufflepuff"
}
