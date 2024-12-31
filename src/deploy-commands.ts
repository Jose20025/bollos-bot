import { REST, Routes } from 'discord.js';
import env from './config/env.config';
import { commands } from './commands';

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST().setToken(env.BOT_TOKEN);

console.log(env);

export async function deployCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(env.APP_ID), {
      body: commandsData,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

deployCommands();
