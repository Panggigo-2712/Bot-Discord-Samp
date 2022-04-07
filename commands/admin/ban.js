const { RoleAdmin } = require('../../database/config.json');

module.exports = {
    name: 'ban',
    description: 'Ini Command banned',
    execute(message, args) {
        if(message.member.roles.cache.has(`${RoleAdmin}`)){
            const member = message.mentions.users.first();
            if(member){
                const membertarget = message.guild.members.cache.get(member.id);
                membertarget.ban();
                message.channel.send('User has been Banned');
            } else {
                message.channel.send('You couldt ban that member');
            }
        }   else {
            message.channel.send('Ini cmd Admin dek!');
        }
    }
}