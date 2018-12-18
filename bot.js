const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');


client.on('message', message => {
  if (message.content.startsWith('.قرأن')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=ikTgTCzHdYU", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply(`**بسم الله الرحمان الرحيم :kaaba:
- نسأل الله ان يكتب لنا ولكم الأجر :heart:
- لا إله الا الله سبحانك أني كنت من الظالمين :kaaba:**`
).then(msg => msg.delete(3000))		
      });
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الفاتحة')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=zCDlycmyLKA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الفاتحة ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل البقرة')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=28ryvbfAzdA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة البقرة ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل آل عمران')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=28ryvbfAzdA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة آل عمران ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل النساء')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8rE348PxUXw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة النساء ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل المائدة')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=b8YBxyHnsP4", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة المائدة ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الأنعام')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=UmtB8ds8grw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الأنعام ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الأعراف')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=5kV6IDSKf0c", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الأعراف ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الأنفال')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=GJ-4FJqA09I", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الأنفال ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل التوبة')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=A3dwM8B7PK4", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة التوبة ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل يونس')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=IvPzXDstz90", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة يونس ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل هود')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=6gCrWHPP82Q", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة هود ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل يوسف')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=22TjE6zq6hI", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة يوسف ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الرعد')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=GJ-4FJqA09I", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الرعد ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل إبراهيم')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=aWUFQQHDcUg", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة إبراهيم ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الحجر')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=s8KVrAEOC9g", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الحجر ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل النمل')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=4FwqWmeQREA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة النمل ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الإسراء')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=ZTy2R7VDzEA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الإسراء ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الكهف')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=_dUGNAILiuw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الكهف ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل مريم')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=21sqaW4ooDM", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة مريم ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل طه')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=-WEpqByP_PQ", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة طه ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الأنبياء')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=a3nlZ3DOp_c", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الأنبياء ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الحج')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=ovLLfBpCOiA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الحج ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل المؤمنون')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=2WJJrv2Fw70", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة المؤمنون ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل النور')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=dhwiiPZcczA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة النور ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الفرقان')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=lLmuySwBYuk", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الفرقان ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الشعراء')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=styCc1NI9eA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الشعراء ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل النمل')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=4FwqWmeQREA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة النمل ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل القصص')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=KlE5-fZcLHg", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة القصص ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل العنكبوت')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=z14rcqtXXUI", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة العنكبوت ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الروم')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=JcY0no2nmE0", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الروم ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل لقمان')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=lWkhXQJMPCQ", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة لقمان ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل السجدة')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=zbyOyImd0v0", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة السجدة ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الأحزاب')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=sEkdbyZpCNs", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الأحزاب ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل سبأ')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WPbGgZSIjK8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة سبأ ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل فاطر')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=UcBsRA0tjkk", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة فاطر ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل يس')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=538ym1P4bIg", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة يس ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل ص')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=wJsVMETritA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة ص ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الزمر')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=5JmYHzm5rgA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الزمر ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل غافر')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=EDsq5bEU7Gg", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة غافر ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل فصّلت')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=UGiDjeSy_eg", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة فصّلت ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الشورى')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=1QPKIkcadao", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الشورى ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الزخرف')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=tk_akqm5T-I", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الزخرف ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الدخان')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qacZ_qUic98", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الدخان ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الجاثية')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=M6M42-L84Fs", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الجاثية ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل الأحقاف')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=taHW4i0hIyk", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة الأحقاف ( وهي من السور مكيّة ) ✅**").then(msg => msg.delete(3000))
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'شغل محمّد')) {
message.delete(4000)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي :x:**`).then(msg => msg.delete(3000))
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=taHW4i0hIyk", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
return message.reply("**سيتم تشغيل سورة محمّد ( وهي من السور مدنيّة ) ✅**").then(msg => msg.delete(3000))
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
- لأظهار الاذكار أكتب | .اذكار :sparkles: 
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



client.on('message', function(message) {
        var prefix = ".";
        var Color = ['bff442','f4d941','ea3c62','ffffff']
        if (message.content.startsWith(prefix + 'بوت')) {
            var ZmP = new Discord.RichEmbed()
.setColor(`${Color[Math.floor(Math.random() * Color.length)]}`)
.addField('**:crown: Servers**','**[ '+client.guilds.size+' ]**',true)
.addField('**:bust_in_silhouette: Users**','**[ '+client.users.size+' ]**',true)
.addField('**:earth_africa: Room**','**[ '+client.channels.size+' ]**',true)
.setFooter('Quran',`${client.user.avatarURL}`)
.setTimestamp()
message.channel.send({embed:ZmP});
}
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.bc21')){
 if(!message.author.id === '312244272000663564') return;
message.channel.sendMessage('جاري ارسال الرسالة لجميع اعضاء البوت |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

	

	



client.on('ready', () => {
     client.user.setActivity("**Quraan ✨ .help**",{type: 'WATCHING'});

});




client.login(process.env.TOKEN1);
