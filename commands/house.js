const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let msg = message;
    // GET ROLES
    let houses = {
        'Hufflepuff': {
            'role': {
                'base': msg.guild.roles.find('name', 'Hufflepuff')
            },
            'description': 'Hufflepuff values hard work, patience, justice, and loyalty.',
            'chosen': false,
            'headOfHouse': 'None',
            'perfects': [],
            'memberCount': 0
        },
        'Ravenclaw': {
            'role': {
                'base': msg.guild.roles.find('name', 'Ravenclaw')
            },
            'description': 'Ravenclaw values intelligence, creativity, learning, and wit.',
            'chosen': false,
            'headOfHouse': 'None',
            'perfects': [],
            'memberCount': 0
        },
        'Gryffindor': {
            'role': {
                'base': msg.guild.roles.find('name', 'Gryffindor')
            },
            'description': 'Gryffindor values courage, bravery, nerve, and chivalry.',
            'chosen': false,
            'headOfHouse': 'None',
            'perfects': [],
            'memberCount': 0
        },
        'Slytherin': {
            'role': {
                'base': msg.guild.roles.find('name', 'Slytherin')
            },
            'description': 'Slytherin values ambition, cunning, leadership, and resourcefulness.',
            'chosen': false,
            'headOfHouse': 'None',
            'perfects': [],
            'memberCount': 0
        }
    }

    if(args.length == 0) {
        for(let house in houses) {
            houses[house]['chosen'] = true;
        }
    } else if(args[0].toLowerCase() == 'besthouse') {
        message.reply('HUFFLEPUFF!');
    } else {
        args.forEach(arg => {
            for(let house in houses) {
                if(arg.toLowerCase() == house.toLowerCase()) houses[house]['chosen'] = true;
            }
        });
    }

    let headRole = msg.guild.roles.find('name', 'Head of House');
    let perfectRole = msg.guild.roles.find('name', 'Perfect');

    for(let house in houses) {
        houses[house]['role']['base'].members.forEach(m => {
            houses[house]['memberCount']++;

            if(houses[house]['headOfHouse'] == 'None') {
                headRole.members.forEach(m_ => {
                    if(m.user.tag == m_.user.tag) houses[house]['headOfHouse'] = m.user.tag;
                });
            }

            perfectRole.members.forEach(m_ => {
                if(m.user.tag == m_.user.tag) {
                    houses[house]['perfects'][houses[house]['perfects'].length] = m.user.tag;
                }
            });
        });
    }

    let res = new Discord.RichEmbed()
    .setThumbnail(msg.guild.iconURL)
    .setDescription('__**Houses of Hogwarts!**__')
    .setColor('#994a20')
    .addBlankField(true)
    .setFooter('Hogwarts yo.', msg.guild.iconURL);

    for(let house in houses) {
        if(houses[house]['chosen']) {
            let houseField = '';
            houseField += `\n*${houses[house]['description']}*\n`
            houseField += `\n**${house} has ${houses[house]['memberCount']} Members!**`
            houseField += `\n**Head of House**: ${houses[house]['headOfHouse']}`
            houseField += `\n**__Perfect__**\n`
            if(houses[house]['perfects'].length == 0) {
                houseField += `\n*No perfects in this house . . .*`;
            } else {
                for(let m in houses[house]['perfects']) {
                    houseField += `\n*${houses[house]['perfects'][m]}*`;
                }
            }

            res.addField(`__${house}__`, houseField)
            .addBlankField(true);
        }
    }

    return msg.channel.send(res);
}

module.exports.help = {
    name: 'house'
}
