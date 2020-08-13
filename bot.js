const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado`);
    const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#ff9933')
                                    .setAuthor('BOT', 'https://i.imgur.com/qTLWhgb.jpg')
                                    .addField('Lista de comandos', 'Reaja com 🚀 quando for iniciar o trabalho\nReaja com ❌ quando for finalizar o trabalho\nReaja com 🍴 quando for comer algo\nReaja com 🚽 quando for ao banheiro\nReaja com ⏸ em outros casos\n', true)
                                    .setThumbnail('https://i.imgur.com/qTLWhgb.jpg')
                                    .setTimestamp()

    client.channels.cache.get('739179981179060255').send(exampleEmbed).then((message) => {
        message.react("🚀")
        message.react("❌")
        message.react("🍴")
        message.react("🚽")
        message.react("⏸")
    }).catch((e) => { console.log(e); });
});

client.on('messageReactionAdd', (reaction, user) => {

    if(user.bot) return;

    if(reaction.emoji.name === '🚀') {
        client.channels.cache.get('739179981179060255').send(`!changeNickname ${user.id} 🚀`)
    } else if(reaction.emoji.name === '❌') {
        client.channels.cache.get('739179981179060255').send(`!changeNickname ${user.id} ❌`)
    } else if(reaction.emoji.name === '🍴') {
        client.channels.cache.get('739179981179060255').send(`!changeNickname ${user.id} 🍴`)
    } else if(reaction.emoji.name === '🚽') {
        client.channels.cache.get('739179981179060255').send(`!changeNickname ${user.id} 🚽`)
    } else if(reaction.emoji.name === '⏸') {
        client.channels.cache.get('739179981179060255').send(`!changeNickname ${user.id} ⏸`)
    }
});

client.on("guildCreate", () => {
    console.log(`Bot entrou no servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("guildDelete", () => {
    console.log(`Bot saiu do servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {
    const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (command === "!changenickname") {
        await message.guild.members.cache.get(args[0]).setNickname(args[0] + args[1]);
    }
});

client.login(config.token);