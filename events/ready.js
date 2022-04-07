const memberCounter = require('../counter/member');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      console.log(`${client.user.tag} Bot Sudah Online`);
      memberCounter(client)
      client.user.setActivity(`Prime Roleplay`, {type: 'PLAYING'});
    },
};
  