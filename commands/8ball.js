const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No.", "I don't know.", "Ask again later.", "No doubt about it.", "Can't predict right now.", "Dear God no!", "Professor Snape disapproves!", "Bother me later...", "Only Merlin may know.", "Fate works in mysterious ways.", "Is the sky blue?", "Duhhh it is obvious.", "Is the grass green?", "Do birds fly?!", "No a pinguin does not. Neither does an ostrich.", "😏"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#CD853F")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}