# Whastapp Boilerplate Bot

This is a whastapp boilerplate bot for small or big project, created with ❤️ ☕ by [JalalLinuX](https://jalallinux.ir)
You can use it for start new whastapp bot project.

## Create Whastapp Bot

Run this project and scan QR code with your whatsapp, then your whatsapp account response to everryone like a bot.

## How To Use

1. Clone this repository

```
git clone https://github.com/jalallinux/whatsapp-bot-boilerplate.git
```

2. Install npm packages (open it in terminal)

```
npm install
```

3. Rename config.example.json to config.json and set config file

```json
{
  "botPrefix": "SELECT YOUR BOT PREFIX HERE",
  "mongoPath": "ENTER YOUR MONGODB CONNECTION"
}
```

4. Optional : Install **nodemon** as global

```
npm install -g nodemon
```

4. Optional : Install **chromium** as global

```
npm install -g chromium
```

5. Optional : For use chromium change in inedx.js
```js
const client = new Client({
  // to run chromium set headless = false
  puppeteer: { headless: true },
  session: sessionCfg,
});
```

6. Run bot as **watch** or **start** script

```
npm run start
```

```
npm run watch
```