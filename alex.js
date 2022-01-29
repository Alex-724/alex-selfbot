const Discord = require("discord.js-selfbot")
const client = new Discord.Client();

async function login(token){
  client.login(token);
}

async function joinVoice(id){
  client.on("READY", async ready => {
    let channel = client.channels.cache.get(id)
    if (!channel) throw new Error("You need to type voice channel id");
    channel.login;
  })
}

async function setStatus(statu){
  client.on("READY", async ready => {
    if (!statu) throw new Error("You need to type status between `online`,`idle`,`dnd`")
    if (statu !== "online" || statu !== "ide" || statu !== "dnd") throw new Error("You need to type status between `online`,`idle`,`dnd`")
    client.user.setPresence({status: statu[1]});
  })
}



module.exports.login = login
module.exports.setStatus = setStatus
module.exports.joinVoice = joinVoice
