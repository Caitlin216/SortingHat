const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return mesage.reply("Couldn't find your target, maybe they have an invisibility cloak!");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use Silencio on them!");
    let muteRole = message.guild.roles.find(`name`, "Muted");
   //start of create role
    if(!muteRole){
        try{
            muteRole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify a time.");

    await(tomute.addRole(muteRole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function(){
        tomute.removeRole(muteRole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    
    }, ms(mutetime));


// end of module
}

module.exports.help = {
    name: "tempmute"
}
