import { Client, Events, GatewayIntentBits } from 'discord.js';
import env from './config/env.config';
import { commands } from './commands';

// Crear una instancia de Cliente
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
  ],
});

// Esto corre solo una vez, cuando el cliente está listo
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as "${readyClient.user.tag}"`);
});

// Command Handler
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName } = interaction;

  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

// Loguear el bot usando el token
client.login(env.BOT_TOKEN);
