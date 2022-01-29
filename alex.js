const Discord = require("discord.js")
const client = Discord.Client();

async function login(token){
  client.login(token);
}

async function joinVoice(id){
  client.on("READY", async ready => {
    let channel = client.channels.cache.get(id)
    if (!channel) throw new Error("Type channel id")
  })
}
