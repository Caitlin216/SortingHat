const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
        if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry, you can't do that.");
        //let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        //if(!rMember) return message.reply("I couldn't find that person on the Marauder's map. Are you sure they exist?");  
        }

        let input = bot.parseInput(this.flags, words);
        let userList = [];
        let days = 1;
        for (let i = 0; i < input.undefined.length; i++) {
            if (input.undefined[i]) {
                if (/[0-9]{17,21}/.test(input.undefined[i])) {
                    userList.push(input.undefined[i].match(/([0-9]{17,21})/)[1]);
                } else if (i == input.undefined.length - 1) {
                    days = parseInt(input.undefined[i]);
                    if (isNaN(days)) {
                        days = 1;
                    }
                }
            }
        }

        bot.send(msg, ':ok_hand:');

module.exports.help = {
    name: "hackban"
}
