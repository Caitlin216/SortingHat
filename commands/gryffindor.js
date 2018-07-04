const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Gryffindor')
    message.member.addRole(Role)

    let aRole = message.guild.roles.find('name','Ravenclaw')
    message.member.removeRole(aRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let bRole = message.guild.roles.find('name','Slytherin')
    message.member.removeRole(bRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let cRole = message.guild.roles.find('name','Hufflepuff')
    message.member.removeRole(cRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)

    message.reply("Hmmm...yess...you have a lots of talents...and you are very brave...aha! You will go to GRYFFINDOR!!!");
}

module.exports.help = {
    name: "gryffindor"
}
