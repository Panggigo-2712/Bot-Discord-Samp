const { RoleAdmin } = require('../../database/config.json');

module.exports = {
    name: 'kick',
    description: 'Ini Command kick',
    execute(message, args) {
        if(message.member.roles.cache.has(`${RoleAdmin}`)){
            const member = message.mentions.users.first();
            if(member){
                const membertarget = message.guild.members.cache.get(member.id);
                membertarget.kick();
                message.channel.send('User has been Kicked');
            } else {
                message.channel.send('You couldt kick that member');
            }
        }   else {
            message.channel.send('Ini cmd Admin dek!');
        }
    }
}