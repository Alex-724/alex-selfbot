const Discord = require("discord.js-selfbot")
const client = new Discord.Client();

async function login(token){
  client.login(token);
  client.on("ready", async () => {
  console.log(`login as ${client.user.tag}`)
  })
}

async function joinVoice(id){
  client.on("ready", async () => {
    let channel = client.channels.cache.get(id)
    if (!channel) return console.error("You need to type voice channel id");
    channel.join();
    console.log(`join ${channel.name}`)
  })
}

async function setStatus(statu){
  client.on("ready", async () => {
    if (!statu) return console.error("You need to type status between `online`,`idle`,`dnd`")
    if (statu !== "online" && statu !== "idle" && statu !== "dnd") return console.error("You need to type status between `online`,`idle`,`dnd`")
    client.user.setPresence({status: statu })
    console.log(`status is ${statu}`)
  })
}



module.exports.login = login
module.exports.setStatus = setStatus
module.exports.joinVoice = joinVoice
