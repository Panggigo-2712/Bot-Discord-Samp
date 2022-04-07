const { MessageEmbed } = require('discord.js');
const { ChannelLeaveLogs } = require('../database/config.json');

module.exports = {
    name: 'guildMemberRemove',
    once: true,
    execute(member) {
        const goodbyembed = new MessageEmbed()
            .setTitle(`${member.user.tag} just left!`, member.user.avatarURL())
            .setDescription("Sad! Let's just hope that they enjoyed their stay")
            .setColor("FF0000");
        member.guild.channels.cache.get(`${ChannelLeaveLogs}`).send({ embeds: [goodbyembed] })

        .catch((err) => console.log(err));
    },
};