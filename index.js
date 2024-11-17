const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to hi and n
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitversebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1171209616806383747')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/faith') //هیچ لێرە مەنوسە
    .setState('Hi Im King Of Developer Discord')
    .setName('Hi Im King Of Developer Discord')
    .setDetails(`King Of Kings`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1162718085946544159/1183365047737655296/IMG_0184.jpg?ex=65881195&is=65759c95&hm=ce15166c3d16556e2ad05d8fbcff70e29486fd270cf1cd43037a383a28f79da5&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Ya Ali') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1162718085946544159/1183365047737655296/IMG_0184.jpg?ex=65881195&is=65759c95&hm=ce15166c3d16556e2ad05d8fbcff70e29486fd270cf1cd43037a383a28f79da5&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Hi Im King Of Developer Discord') //Text when you hover the Small image
    .addButton('My Fameli', 'https://discord.gg/YQj3sjvkSA')
    .addButton('King Of Kings', 'https://discord.gg/jhSUDvy3uf');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Hi Im King Of Developer Discord`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});


client.login("ODQzNDg1MDMwNDYxOTk3MDU2.GVn4qW.GnqTvSEm5tq-f3xfQ5i5P8KixqEJjNzL_2lbfA");