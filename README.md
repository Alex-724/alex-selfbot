## Installation
```txt
npm i discord.js-selfbot-alex
```

## Delcaration
```js
const Alex = require('discord.js-selfbot-alex')
```

## Login (Token)
```js
Alex.login(token)
```

## Fast Demo
```js
const Alex = require('discord.js-selfbot-alex');
Alex.start({
    token: "false", // You must type account token here
    status: "idle", // You need to type account statues here if you don't need it type "false"
    channel_id: "12345678", // You need to type voice channel id here if you don't need it type "false"
    mute: "true", // you can add self mute if you don't need it type "false"
    def: "true", // you can add self defend if you don't need it type "false"
    akf: "false", // this is akf message for selfbot
    akf_dm_message: "hello i don't have a time", //send akf message in dm if you don't need it type "false"
    akf_guild_message: "hello i don't have a time" //send akf message in guild if you don't need it type "false"
})
```

## Code Demo
```js
const Alex = require('discord.js-selfbot-alex');
Alex.setStatus("idle");
Alex.joinVoice("12345678")
Alex.mute("true")
Alex.login(token)
```
