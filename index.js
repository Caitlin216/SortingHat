const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commands/", (err, files) => {

    if(err) message.reply(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        message.reply("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);  
    //bot.user.setActivity("Hogwarts Mystery! | !help for help");
    bot.user.setActivity("all the students. | !help for help", {type: "WATCHING"});
});

bot.on("guildMemberAdd", async member => {
    
    console.log(`${member.id} joined the server!`);
    let role = member.guild.roles.find('name', 'Invited');
    member.addRole(role);
});

bot.on("guildMemberAdd", async member => {

    console.log(`${member.id} joined the server.`);
    let welcomechannel = member.guild.channels.find(`name`, "new-students");
    welcomechannel.send(`Dear Mr/Ms ${member}, we are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary objectives to complete before entering the school. You are required to read the rules at <#448968076038373383>. After reading the rules proceed to <#448969324254855185> to get sorted in a house. Last but not least fill in a short bio about yourself in <#461248739114221589>. Sincerely Professor Albus Dumbledore. https://imgur.com/a/WVLkKQ8`);

});

bot.on("guildMemberAdd", async member => {

    console.log(`${member.id} joined the server.`);
    let welcomechannel2 = member.guild.channels.find(`name`, "sorting-hat");

    let sortembed = new Discord.RichEmbed()
    .setFooter("To get sorted into your house, please use the !gryffindor, !hufflepuff, !ravenclaw or !slytherin command. If you don't know your house use the !sortme command to go to the official Sorting Hat quiz.");

    welcomechannel2.send(`Hmmm... difficult. VERY difficult. Plenty of courage, I see. Not a bad mind, either. There's talent, oh yes. And a thirst to prove yourself. But where to put ${member}?`, (sortembed));
});

bot.on("message", (message) => {
    if(message.content == "ping") {
        message.channel.send("pong");
    }
});

bot.on("message", (message) => {
    if(message.content == "Snape, Snape, Severus Snape!") {
        message.channel.send("Dumbledore!");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply("You have to wait 5 seconds between commands.")
    }
    
    cooldown.add(message.author.id);    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args); 

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});

bot.login(process.env.BOT_TOKEN);
