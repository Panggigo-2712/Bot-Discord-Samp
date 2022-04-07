const { MessageEmbed } = require('discord.js');
const { ChannelJoinLogs } = require('../database/config.json');

module.exports = {
    name: 'guildMemberAdd',
    once: true,
    execute(member) {
      const welcomembed = new MessageEmbed()
        .setTitle(`${member.user.tag} just joined!`, member.user.avatarURL())
        .setDescription(`Welcome to ${member.guild.name} Server!`)
        .setColor("FF0000");
      member.guild.channels.cache.get(`${ChannelJoinLogs}`).send({ embeds: [welcomembed] })
    },
};