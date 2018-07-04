const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Hufflepuff')
    message.member.addRole(Role)

    let aRole = message.guild.roles.find('name','Ravenclaw')
    message.member.removeRole(aRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let bRole = message.guild.roles.find('name','Slytherin')
    message.member.removeRole(bRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let cRole = message.guild.roles.find('name','Gryffindor')
    message.member.removeRole(cRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
   
    message.reply("Hmm...okay...I can see you are optimistic and kind-hearted...hmm...I know there is a house that can fit in you in...go for HUFFLEPUFF!!!");
}

module.exports.help = {
    name: "hufflepuff"
}
