const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Character #3')
    message.member.addRole(Role)

    let aRole = message.guild.roles.find('name','Character #2')
    message.member.removeRole(aRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let bRole = message.guild.roles.find('name','Character #1')
    message.member.removeRole(bRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let cRole = message.guild.roles.find('name','Character #4')
    message.member.removeRole(cRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)
    
    let dRole = message.guild.roles.find('name','Character #5')
    message.member.removeRole(dRole)
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error)

    message.reply("you just got the role for people who have 3 characters in the Role-Play!");
}

module.exports.help = {
    name: "oc3"
}
