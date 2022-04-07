const { RoleAdmin } = require('../../database/config.json');

module.exports = {
    name: 'clear',
    description: "Clear Messages!",
    async execute(message, args) {
        if(message.member.roles.cache.has(`${RoleAdmin}`))
        {
            if(!args[0]) return message.channel.send("Tambahkan angka!. contoh /clear 100");
            if(isNaN(args[0])) return message.channel.send("Tambahkan angka cuy!");
            if(args[0] > 100) return message.channel.send("Maksimal 100 pesan!");
            if(args[0] < 1) return message.channel.send("Minimal 1 pesan!");
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send("Cuman admin yang bisa!")
        }
    
    }
}