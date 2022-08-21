const { Client } = require("discord.js-selfbot");

class AlexSelfbot extends Client {
  constructor(data) {
    super(data);
  }
  async status(STATUS) {
    this.on("ready", async () => {
      if (STATUS !== "online" && STATUS !== "idle" && STATUS !== "dnd")
        return console.error(
          "You need to type status between `online`,`idle`,`dnd`"
        );
      await this.user.setPresence({ status: STATUS });
    });
  }
  async joinChannel(CHANNEL_ID, OPTION) {
    this.on("ready", async () => {
      const channel = this.channels.cache.get(CHANNEL_ID);
      const DEF = OPTION.def;
      const MUTE = OPTION.mute;
      if (!channel) return console.error("You need to type voice channel id");
      channel
        .join()
        .then((connection) => {
          ////////////////////
          if (DEF) {
            connection.voice.setSelfDeaf(true);
          } else {
            connection.voice.setSelfDeaf(false);
          }
          ////////////////////
          if (MUTE) {
            connection.voice.setSelfMute(true);
          } else {
            connection.voice.setSelfMute(false);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    });
  }
}

module.exports = AlexSelfbot;