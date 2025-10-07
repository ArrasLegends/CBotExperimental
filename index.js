const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Bot ready
client.once("ready", () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

// Simple command
const prefix = "cb!";

client.on("messageCreate", (message) => {
  if (message.author.bot) return; // ignore other bots
  if (!message.content.startsWith(prefix)) return; // only respond to prefix

  const command = message.content.slice(prefix.length).trim(); // remove prefix

  if (command === "about") {
    message.reply(
      "CreativBox is Just a Sandbox Server.",
    );
  }

  if (command === "hello") {
    message.reply("Hello there 👋");
  }
  
  if (command === "version") {
    message.reply("1.2.2")
  }

  if (command === "lordcmd") {
    message.reply("LordCMD is the Owner of CreativBox and Arras Legends");
  }
  
  if (command === "khad") {
    message.reply("Khad is the Moderator of CreativBox");
  }
  
  if (command === "infynotarras") {
    message.reply("infynotarras is just a nice featured youtuber.👍");
  }
  
  if (command === "kilian") {
    message.reply("He is pea door ass!");
  }

  if (command === "help") {
    message.reply("**List of Commands** \n> `1` cb!about → Shows Info \n> `2` cb!version → Shows the CreativBox Version \n> `3` cb!lordcmd → Shows About LordCMD \n> `4` cb!khad → Shows About Khad \n> `5` cb!infynotarras → Shows About InfyNotArras");
  }
});

// Login
client.login(process.env.TOKEN);
