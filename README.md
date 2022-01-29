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
    status: "idle", // You need to type account statues here if you don't need type "false"
    channel_id: "12345678" // You need to type voice channel id here if you don't need type "false"
})
```

## Code Demo
```js
const Alex = require('discord.js-selfbot-alex');
Alex.setStatus("idle");
Alex.joinVoice("")
Alex.login(token)
```
