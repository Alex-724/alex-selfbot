const Discord = require("discord.js-selfbot");

class AlexSelfbot extends Discord {
  constructor(data) {
    super(data);
    this.mssg = "";
  }
  async start(data) {
    let msssg = this.mssg;
    const TOKEN = data.token,
      STATUS = data.status,
      CHANNEL_ID = data.channel_id,
      MUTE = data.mute,
      DEF = data.def;
    // AKF = data.akf,
    // AKF_DM_MESSAGE = data.akf_dm_message,
    // AKF_GUILD_MESSAGE = data.akf_guild_message;
    ////////////////////////////////////////////////////////////////////////////////
    const alex = new Discord.Client();
    if (!TOKEN) return console.error("You need to type token");
    alex.login(TOKEN);
    alex.on("ready", async () => {
      msssg += `[🟢] login as ${alex.user.tag}` + newLine;
    });
    ////////////////////////////////////////////////////////////////////////////////
    alex.on("ready", async () => {
      if (STATUS === "false") return;
      if (!STATUS)
        return console.error(
          "You need to type status between `online`,`idle`,`dnd`"
        );
      if (STATUS !== "online" && STATUS !== "idle" && STATUS !== "dnd")
        return console.error(
          "You need to type status between `online`,`idle`,`dnd`"
        );
      alex.user.setPresence({ status: STATUS });
      msssg += `[🟢] status is ${STATUS}` + newLine;
    });
    ////////////////////////////////////////////////////////////////////////////////
    alex.on("ready", async () => {
      if (CHANNEL_ID === "false") return;
      if (!CHANNEL_ID)
        return console.error("You need to type voice channel id");
      let channel = alex.channels.cache.get(CHANNEL_ID);
      if (!channel) return console.error("You need to type voice channel id");
      channel
        .join()
        .then((connection) => {
          msssg += `[🟢] join ${channel.name}` + newLine;
          ////////////////////
          if (DEF === "true") {
            msssg = msssg + `[🟢] account is defend` + newLine;
            connection.voice.setSelfDeaf(true);
          } else if (DEF === "false") {
            connection.voice.setSelfDeaf(false);
            msssg += `[⛔] account is undefend` + newLine;
          }
          ////////////////////
          if (MUTE === "true") {
            connection.voice.setSelfMute(true);
            msssg += `[🟢] account is mute` + newLine;
          } else if (MUTE === "false") {
            connection.voice.setSelfMute(false);
            msssg += `[⛔] account is unmute` + newLine;
          }
        })
        .catch((e) => {
          console.error(e);
        });
    });
    ////////////////////////////////////////////////////////////////////////////////
    // alex.on("message", async (message) => {
    //   if (!AKF || AKF !== "true") return;
    //   if (!message.guild) {
    //     if (!AKF_DM_MESSAGE || AKF_DM_MESSAGE !== "true"|| message.author.id === alex.id) return;
    //     message.reply(`AKF: ${AKF_DM_MESSAGE}`).catch((error) => {});
    //   } else if (message.guild) {
    //     if (!AKF_GUILD_MESSAGE || AKF_GUILD_MESSAGE !== "true") return;
    //     message.reply(`AKF: ${AKF_GUILD_MESSAGE}`).catch((error) => {});
    //   } else {
    //     return console.error("something went wrong in my code");
    //   }
    // });
    // alex.on("ready", async () => {
    //   if (!AKF || AKF !== "true") return;
    //   if (AKF_DM_MESSAGE || AKF_DM_MESSAGE === "true") {
    //     msssg +=
    //       `[🟢] You have enabled akf dm message and the message is ${AKF_DM_MESSAGE}` +
    //       newLine;
    //   } else if (AKF_GUILD_MESSAGE || AKF_GUILD_MESSAGE === "true") {
    //     msssg +=
    //       `[🟢] You have enabled akf guild message and the message is ${AKF_GUILD_MESSAGE}` +
    //       newLine;
    //   }
    // });
    // alex.on("ready", async () => {
    //   console.log(msssg);
    // });
  }
}

module.exports = AlexSelfbot;

const newLine = "\n";
async function login(token) {
  const client = new Discord.Client();
  client.login(token);
  client.on("ready", async () => {
    console.log(`login as ${client.user.tag}`);
  });
}

async function joinVoice(id) {
  client.on("ready", async () => {
    let channel = client.channels.cache.get(id);
    if (!channel) return console.error("You need to type voice channel id");
    channel.join();
    console.log(`join ${channel.name}`);
  });
}

async function setStatus(statu) {
  client.on("ready", async () => {
    if (!statu)
      return console.error(
        "You need to type status between `online`,`idle`,`dnd`"
      );
    if (statu !== "online" && statu !== "idle" && statu !== "dnd")
      return console.error(
        "You need to type status between `online`,`idle`,`dnd`"
      );
    client.user.setPresence({ status: statu });
    console.log(`status is ${statu}`);
  });
}

async function start(data) {
  let msssg = "";
  const TOKEN = data.token,
    STATUS = data.status,
    CHANNEL_ID = data.channel_id,
    MUTE = data.mute,
    DEF = data.def;
  // AKF = data.akf,
  // AKF_DM_MESSAGE = data.akf_dm_message,
  // AKF_GUILD_MESSAGE = data.akf_guild_message;
  ////////////////////////////////////////////////////////////////////////////////
  const alex = new Discord.Client();
  if (!TOKEN) return console.error("You need to type token");
  alex.login(TOKEN);
  alex.on("ready", async () => {
    msssg += `[🟢] login as ${alex.user.tag}` + newLine;
  });
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("ready", async () => {
    if (STATUS === "false") return;
    if (!STATUS)
      return console.error(
        "You need to type status between `online`,`idle`,`dnd`"
      );
    if (STATUS !== "online" && STATUS !== "idle" && STATUS !== "dnd")
      return console.error(
        "You need to type status between `online`,`idle`,`dnd`"
      );
    alex.user.setPresence({ status: STATUS });
    msssg += `[🟢] status is ${STATUS}` + newLine;
  });
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("ready", async () => {
    if (CHANNEL_ID === "false") return;
    if (!CHANNEL_ID) return console.error("You need to type voice channel id");
    let channel = alex.channels.cache.get(CHANNEL_ID);
    if (!channel) return console.error("You need to type voice channel id");
    channel
      .join()
      .then((connection) => {
        msssg += `[🟢] join ${channel.name}` + newLine;
        ////////////////////
        if (DEF === "true") {
          msssg = msssg + `[🟢] account is defend` + newLine;
          connection.voice.setSelfDeaf(true);
        } else if (DEF === "false") {
          connection.voice.setSelfDeaf(false);
          msssg += `[⛔] account is undefend` + newLine;
        }
        ////////////////////
        if (MUTE === "true") {
          connection.voice.setSelfMute(true);
          msssg += `[🟢] account is mute` + newLine;
        } else if (MUTE === "false") {
          connection.voice.setSelfMute(false);
          msssg += `[⛔] account is unmute` + newLine;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  });
  ////////////////////////////////////////////////////////////////////////////////
  // alex.on("message", async (message) => {
  //   if (!AKF || AKF !== "true") return;
  //   if (!message.guild) {
  //     if (!AKF_DM_MESSAGE || AKF_DM_MESSAGE !== "true"|| message.author.id === alex.id) return;
  //     message.reply(`AKF: ${AKF_DM_MESSAGE}`).catch((error) => {});
  //   } else if (message.guild) {
  //     if (!AKF_GUILD_MESSAGE || AKF_GUILD_MESSAGE !== "true") return;
  //     message.reply(`AKF: ${AKF_GUILD_MESSAGE}`).catch((error) => {});
  //   } else {
  //     return console.error("something went wrong in my code");
  //   }
  // });
  // alex.on("ready", async () => {
  //   if (!AKF || AKF !== "true") return;
  //   if (AKF_DM_MESSAGE || AKF_DM_MESSAGE === "true") {
  //     msssg +=
  //       `[🟢] You have enabled akf dm message and the message is ${AKF_DM_MESSAGE}` +
  //       newLine;
  //   } else if (AKF_GUILD_MESSAGE || AKF_GUILD_MESSAGE === "true") {
  //     msssg +=
  //       `[🟢] You have enabled akf guild message and the message is ${AKF_GUILD_MESSAGE}` +
  //       newLine;
  //   }
  // });
  // alex.on("ready", async () => {
  //   console.log(msssg);
  // });
}

module.exports.start = start;
module.exports.login = login;
module.exports.setStatus = setStatus;
module.exports.joinVoice = joinVoice;
