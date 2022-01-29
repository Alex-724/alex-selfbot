const Discord = require("discord.js-selfbot")
const client = new Discord.Client();

async function login(token){
  client.login(token);
  console.log(`login as ${client.user.tag}`)
}

async function joinVoice(id){
  client.on("READY", async ready => {
    let channel = client.channels.cache.get(id)
    if (!channel) return console.error("You need to type voice channel id");
    channel.join();
    console.log(`join ${channel.name}`)
  })
}

async function setStatus(statu){
  client.on("READY", async ready => {
    if (!statu) return console.error("You need to type status between `online`,`idle`,`dnd`")
    if (statu !== "online" || statu !== "ide" || statu !== "dnd") return console.error("You need to type status between `online`,`idle`,`dnd`")
    client.user.setPresence({status: statu[1]})
    console.log(`status is ${statu}`)
  })
}



module.exports.login = login
module.exports.setStatus = setStatus
module.exports.joinVoice = joinVoice
