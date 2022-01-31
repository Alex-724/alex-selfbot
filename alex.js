const Discord = require("discord.js-selfbot")
const main_client = new Discord.Client();
const newLine = `
`;
async function login(token) {
  const client = new Discord.Client();
  client.login(token);
  client.on("ready", async () => {
    console.log(`login as ${client.user.tag}`)
  })
}

async function joinVoice(id) {
  client.on("ready", async () => {
    let channel = client.channels.cache.get(id)
    if (!channel) return console.error("You need to type voice channel id");
    channel.join();
    console.log(`join ${channel.name}`)
  })
}

async function setStatus(statu) {
  client.on("ready", async () => {
    if (!statu) return console.error("You need to type status between `online`,`idle`,`dnd`")
    if (statu !== "online" && statu !== "idle" && statu !== "dnd") return console.error("You need to type status between `online`,`idle`,`dnd`")
    client.user.setPresence({ status: statu })
    console.log(`status is ${statu}`)
  })
}

async function start(data) {
  const console = "";

  const TOKEN = data.token,
    STATUS = data.status,
    CHANNEL_ID = data.channel_id,
    MUTE = data.mute,
    DEF = data.def,
    AKF = data.akf,
    AKF_DM_MESSAGE = data.akf_dm_message,
    AKF_GUILD_MESSAGE = data.akf_guild_message;
  ////////////////////////////////////////////////////////////////////////////////
  const alex = new Discord.Client();
  if (!TOKEN) return console.error("You need to type token")
  alex.login(TOKEN);
  alex.on("ready", async () => {
    console = log(console,`login as ${alex.user.tag}`,"log")
  })
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("ready", async () => {
    if (STATUS === "false") return;
    if (!STATUS) return console.error("You need to type status between `online`,`idle`,`dnd`")
    if (STATUS !== "online" && STATUS !== "idle" && STATUS !== "dnd") return console.error("You need to type status between `online`,`idle`,`dnd`")
    alex.user.setPresence({ status: STATUS })
    console = log(console,`status is ${STATUS}`,"log")
  })
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("ready", async () => {
    if (CHANNEL_ID === "false") return;
    if (!CHANNEL_ID) return console.error("You need to type voice channel id")
    let channel = alex.channels.cache.get(CHANNEL_ID)
    if (!channel) return console.error("You need to type voice channel id");
    channel.join().then(connection => {
      console = log(console,`join ${channel.name}`,"log")
      ////////////////////
      if (DEF === "true") {
        console = log(console,`account is defend`,"log")
        connection.voice.setSelfDeaf(true);
      } else if (DEF === "false") {
        console = log(console,`account is undefend`,"error")
        connection.voice.setSelfDeaf(false);
      }
      ////////////////////
      if (MUTE === "true") {
        console = log(console,`account is mute`,"log")
        connection.voice.setSelfMute(true);
      } else if (MUTE === "false") {
        console = log(console,`account is unmute`,"error")
        connection.voice.setSelfMute(false);
      }
    })
      .catch(e => {
        console.error(e);
      });
  })
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("message", async message => {
    if (!AKF || AKF !== "true") return;
    if (message.author.bot) return;
    if (!message.guild) {
      if (!AKF_DM_MESSAGE || AKF_DM_MESSAGE !== "true") return;
      message.reply(`AKF: ${AKF_DM_MESSAGE}`).catch(error => {})
    } else if (message.guild) {
      if (!AKF_GUILD_MESSAGE || AKF_GUILD_MESSAGE !== "true") return;
      message.reply(`AKF: ${AKF_GUILD_MESSAGE}`).catch(error => {})
    } else {
      return console.error("something went wrong in my code");
    }
  })
  alex.on("ready", async () => {
    if (!AKF || AKF !== "true") return;
    if (AKF_DM_MESSAGE || AKF_DM_MESSAGE === "true") {
      console = log(console,`You have enabled akf dm message and the message is ${AKF_DM_MESSAGE}`,"log")
    } else if (AKF_GUILD_MESSAGE || AKF_GUILD_MESSAGE === "true") {
      console = log(console,`You have enabled akf guild message and the message is ${AKF_GUILD_MESSAGE}`,"log")
    };
  })
  console.log(console)
}

async function log(oldmsg, addmsg, cc) {
  if (cc === "log") {
    oldmsg = oldmsg + "🟢" + addmsg + newLine;
  } else if (cc === "error") {
    oldmsg = oldmsg + "⛔" + addmsg;
  }
  return oldmsg
}
module.exports.start = start
module.exports.login = login
module.exports.setStatus = setStatus
module.exports.joinVoice = joinVoice
