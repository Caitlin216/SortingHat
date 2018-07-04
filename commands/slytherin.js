const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Slytherin')
    message.member.addRole(Role)

    let aRole = message.guild.roles.find('name','Ravenclaw')
    message.member.removeRole(aRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let bRole = message.guild.roles.find('name','Hufflepuff')
    message.member.removeRole(bRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let cRole = message.guild.roles.find('name','Gryffindor')
    message.member.removeRole(cRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)

    message.reply("Hmmm...interesting...I can see the potential inside you...and to showcase that...you better be...SLYTHERIN!!!");
}

module.exports.help = {
    name: "slytherin"
}
