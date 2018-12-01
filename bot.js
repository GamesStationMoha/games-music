const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');



client.on('message', message => {
  if (message.content.startsWith('.قرأن')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('.play.1')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqqvpP8TVfk&t=88s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('.play.2')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('.play.3')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=mxUsXAwur5o&t=6s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('.play.4')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('.play.5')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=6Hzk5uPDaJk", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('.play.6')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=g46yT-neUnw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('.play.7')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=g46yT-neUnw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on("message", message => {
 if (message.content === ".help") {

  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
**نسأل الله ان يكتب لنا ولكم الأجر :kaaba: 

- لبدأ القرأن أكتب | .قرأن :dove: 
- لتوقيف القرأن أكتب | .وقف :octagonal_sign: 
- لدعوة البوت أكتب | .دعوة :comet: 
**
`)


message.channel.sendEmbed(embed)

}
}); 

client.on("message", message => {
  if(message.content === ".وقف" ) {
                  var servers = {};

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    
  }
});


   var PREFIX = "."
   var prefix = "."
client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "312244272000663564") return;



if (message.content.startsWith(PREFIX + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/31014411");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 

if (message.content.startsWith(PREFIX + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 
if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});

 client.on('message', message => {
let args = message.content.split(' ').slice(1)
if(message.content.startsWith(prefix + 'setGame')) {
    if(message.author.id != '312244272000663564') return;
    else {
    client.user.setGame(args.join(' '));
}
}
if(message.content.startsWith(prefix + 'setStreaming')) {
    if(message.author.id != '312244272000663564') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'STREAMING', url:'MjrmGames'});
}
}
if(message.content.startsWith(prefix + 'setListening')) {
    if(message.author.id != '312244272000663564') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'LISTENING'});
}
}
if(message.content.startsWith(prefix + 'setWatching')) {
    if(message.author.id != '312244272000663564') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'WATCHING'});
}
}
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

   var PREFIX = "."

client.on('message' , message => {
  if (message.author.bot) return;
    if(message.content.startsWith (PREFIX  + 'دعوة')) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(client.user.avatarURL) 
.setTitle(':kaaba: لإضافة البوت أضغط هنا')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=442421179442266112&permissions=53487616&scope=bot')
message.channel.sendEmbed(embed);
}
});

client.login(process.env.BOT_TOKEN1);
