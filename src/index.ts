import { Client, Events, GatewayIntentBits } from 'discord.js';
import env from './config/env.config';

// Crear una instancia de Cliente
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Esto corre solo una vez, cuando el cliente está listo
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as "${readyClient.user.tag}"`);
});

// Loguear el bot usando el token
client.login(env.BOT_TOKEN);
