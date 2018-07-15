const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Sorting Hat at your service!")
    .setDescription("Here is a list of commands you can use. The bot also has some easter eggs. Chat and find out!")
    .setThumbnail(bicon)
    .setColor("#CD853F")
    .addBlankField(true)
    .addField("**Sorting**", "`!ravenclaw` get sorted in Ravenclaw, `!gryffindor` get sorted in Gryffindor, `!hufflepuff` get sorted in Hufflepuff, `!Slytherin` get sorted in Slytherin, `!sortme` get a link to sorting hat quiz.")
    .addField("**Add Role**", "`!roleplayer` get the Roleplayer role and see the roleplay channels, `!artist` get the Artist role, `!oc1` get the Character #1 role, `!oc2` get the Character #2 role, `!oc3` get the Character #3 role, `!oc4` get the Character #4 role.")
    .addField("**Information**","`!botinfo` shows info about the bot, `!serverinfo` shows info about the server, `!help` shows list of commands.")
    .addField("**Incident**","`!report @username <reason>` report the selected user.")
    .addField("**Entertainment**","`!8ball <question>` answers all your questions, ~~`!cat` shows a random picture or gif of a cat, `!doggo` shows a random picture or gif of a dog,~~ `!roll` rolls a die.")
    .addBlankField(true)
    .addField("**Moderator**","`!prefix <desired prefix>` sets a new prefix, `!addrole @username <role>` adds a role to selected user, `!removerole @username <role>` removes role from selected user, `!kick @username <reason>` kicks selected user, `!ban @username <reason>` bans selected user, `!clear <amount msg>` clears messages, `!say <sentence>` make the bot say anything.")
    .setFooter("This bot was created by Sabrina the server owner of Hogwarts.")

    message.author.sendMessage(helpEmbed);
}

module.exports.help = {
    name: "help"
}
