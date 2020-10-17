const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://NameProject.glitch.me/`);
}, 280000);

////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs"); 
const Canvas = require("canvas");
const jimp = require("jimp");
  let points = {}

//////////////////////
client.on('ready', () => {
console.log(`Logged in ${client.user.tag}!`);
});  
/////////////////////|

const prefix = '$' //البريفكس أو امر التشغيل

////////////////////|
  client.on('message', message => {
    if(message.author.bot) return;
            if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
              if (message.content.startsWith(prefix + 'فكك') || message.content.startsWith(prefix+"fkk")) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

              const type = require('./fkk.json');
              const item = type[Math.floor(Math.random() * type.length)];
           let author = message.author;
              const filter = response => {
                
                  return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
              };
              message.channel.send('**لديك __15__ ثانيه لتفكيك الكلمه**').then(msg => {

 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ احسنت لقد تمكنت من تفكيك الكلمه بسرعه`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: لم يتمكن احد من تفكيك الكلمه في الوقت المناسب`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});




client.on('message', message => {
	 if(message.author.bot) return;
  if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };if (message.content.startsWith(prefix + 'لغز') || message.content.startsWith(prefix+"puzzle")) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك __15__ ثانيه لحل هذه اللغز**').then(msg => {
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ احسنت لقت تمكنت من حل اللغز`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x:لم يتمكن احد من حل اللغز `)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});


client.on('message', message => {
	 if(message.author.bot) return;
     if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
    if (message.content.startsWith(prefix+ 'ركب') || message.content.startsWith(prefix+"rkb")) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./rkb.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك __15__ ثانيه لتركيب الكلمه**').then(msg => {
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ احسنت لقد ركبت الكلمة`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: لم يتمكن احد من تركيب الكلمة`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});







client.on('message', message => {
	 if(message.author.bot) return;
       if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
      if (message.content.startsWith(prefix + 'اسرع') ||  message.content.startsWith(prefix+"fast")) {
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
      
      const type = require('./type.json');
      const item = type[Math.floor(Math.random() * type.length)];
      const filter = response => {
          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
      };
      message.channel.send('** لديك __15__ ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
      
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});




 client.on('message', message => {
	  if(message.author.bot) return;
      if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
    if (message.content.startsWith(prefix + 'رياضيات') || message.content.startsWith(prefix+"math")) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./math.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك __15__ ثانيه لحل المسئله**').then(msg => {
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                       message.channel.awaitMessages(filter,{
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ **احسنت لقد تمكنت من أجابه عن معادله بسرعه**`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: **لم يتمكن احد من حل معادله في الوقت المناسب**`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});












client.on('message', message => {
      if(message.author.bot) return;
if (message.content.startsWith(prefix + 'top')) {
    let _top = 1;
     let topp = Object.values(points);
 let top = topp.slice(0, 10).map(users => `**\`.${_top++}\` | <@${users.id}> \`Points: ${users.points}\`**`).sort((a, b) => a > b).join('\n');
    const prefixlor = new Discord.RichEmbed()
      .setTitle("Leaderboard")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(top,true)
   
  	message.channel.sendEmbed(prefixlor)
}
  
});

client.on('message', message => {
      if(message.author.bot) return;
if (message.content.startsWith(prefix + 'نقاطي') || message.content.startsWith(prefix+"points")) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`**Points:** \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
});




   

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "اكس او")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`جرب *xo @uesr`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });  

client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🇸')
        msg.react("🇷")
        msg.react("🇵")
.then(() => msg.react('🇸'))
.then(() =>msg.react('🇷'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}
});

client.on('message', luxy => { 
if (luxy.author.bot) return;
if (luxy.content === prefix+"help") {
let embed = new Discord.RichEmbed()

.setColor("GREEN")
.setDescription(`**~~=~~ Bot Orders | أوامر البوت ~~=~~
---------------------------------
🎮 - -rules لروئية القوانين

🎮 - $lock لقفل الشات

🎮 - ${prefix}اسرع

🎮 - ${prefix}رياضيات

🎮 - ${prefix}لغز

🎮 - ${prefix}اكس او

---------------------------------**`)
.setFooter('Copy Right Reserved For: TC & MG')
luxy.channel.send({embed:embed});
}
});

client.login(process.env.MG_TOKEN);

client.on('message', msg => {
  if (msg.content === `السلام عليكم`) {
    msg.reply(`وعليكم السلام :rose:`);
  }
});

client.on('message', msg => {
  if (msg.content === `الامر الي تبغاه`) {
    msg.reply(`الرد الي تبغاه`);
  }
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on("message", message => {
  if (message.content === prefix + "قفل") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**تم قفل الشات ⛔ **");
      });
  }
  if (message.content === prefix + "فتح") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**تم فتح الشات ✅**");
      });
  }
});

client.on("error", err => {
  console.log(err);
});

client.on("messageCreate", async message => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map(r => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        r =>
          `${r.name +
            space.substring(r.name.length) +
            message.guild.members.filter(m => m.roles.includes(r.id))
              .length} members`
      )
      .join("\n");
    await message.channel.sebd(`\`\`\`${rr}\`\`\``);
  }
});

client.on ("guildMemberAdd", member => {
 
   var role = member.guild.roles.find ("name", "#2");
   member.addRole (role);
 
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '#general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});

client.on('message', message => {
    if (message.content.startsWith('$avt')) {
        if (message.author.bot || message.channel.type == 'dm') return;
        var args = message.content.split(' ')[1];
        var avt = args || message.author.id;
        client
            .fetchUser(avt)
            .then(user => {
                avt = user;
                let avtEmbed = new Discord.RichEmbed()
                    .setColor('#36393e')
                    .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
                    .setImage(avt.avatarURL)
                    .setFooter(``, message.client.user.avatarURL);
                message.channel.send(avtEmbed);
            })
            .catch(() => message.channel.send(`Error`));
    } 
}); 

client.on("guildCreate", guild => {
  console.log(` Bc - Games join Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
  client.channels.get("763504924914745394").send('**Bc - Games** ``Added`` To Server '+`**${guild.name}**`+' ``Server Owner`` ' +`**${guild.owner.user.username}**` )
  });
//Layer teammmmmmmmmm. made by tarik.
//Layer teammmmmmmmmm. made by tarik.
  client.on("guildDelete", guild => {
  console.log(` Bc - Games Leave From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
  client.channels.get("763504924914745394").send('**Bc - Games** ``Kicked`` From Server '+`**${guild.name}**`+' ``Server Owner`` ' +`**${guild.owner.user.username}**`)
  });

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'cmd');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كل زق')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** الرجاء عدم السب :angry: ! **`)
    }
});


client.on('message', message => {
  if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith(prefix + 'bc')) {
      message.guild.members.forEach(member => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          member.send(`**:loudspeaker: ${message.guild.name} **
${args}`);
      });
  }

});

client.on("message", message => {
  if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "bc")) {
                       if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (!args[1]) {
                              let embed3 = new Discord.RichEmbed()
                              .setDescription("-bc <message>")
                              .setColor("RANDOM")
                              message.channel.sendEmbed(embed3);
                          } else {

                          let embed4 = new Discord.RichEmbed()
                                                          .setDescription(':white_check_mark: BroadCast Sent !')
                                                          .setColor("#008000")
                              message.channel.sendEmbed(embed4);
                          }
                        }
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لعقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "suggestions")
        if (!Room) return message.channel.send("Can not find suggestions room").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react('✅').then(() =>
               c.react('❌'))
           
       }).catch(e => console.error(e)
       )
   }
});

client.on("message", message => {
    if (message.content === "-rules") {
           message.react("✅")
              message.react("❌")
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
هنا القوانين
●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
  
    `)
   
      message.author.sendEmbed(embed)
      
      }
}); 

client.on('guildMemberUpdate', (ninja, ot,) => {
if(ninja.roles.size < ot.roles.size) {
 let role = ot.roles.filter(r => !ninja.roles.has(r.id)).first();
            let embed = new Discord.RichEmbed()
            .setThumbnail(ninja.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(`
**New Role**
 
**✨ Role Name:** ( ${role.name} )
 
**🔗 Server:** ${ot.guild.name}`)
            .setTimestamp()
           .setFooter(`🔰 Guild ID : ${ninja.guild.id}`) 
            ot.user.send(embed); 
}
});