const { GrupCounter, ChannelCounterMember } = require('../database/config.json');

module.exports = async(client) =>{
    const guild = client.guilds.cache.get(`${GrupCounter}`);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(`${ChannelCounterMember}`);
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    }, 5000);
}