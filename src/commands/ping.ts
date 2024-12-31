import { SlashCommandBuilder } from 'discord.js';
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Responde con Pong!');

export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply('Pong!');
};
