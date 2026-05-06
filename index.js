const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'dynamic-8.magmanode.com:25944', // Yahan MagmaNode ka IP likhein
    port: 25565,           // Yahan port likhein
    username: 'HishamBot', 
    version: '1.21.1'
});

bot.on('spawn', () => {
    console.log('Bot joined the server!');
    // Anti-AFK Jump
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
});

bot.on('end', () => {
    console.log('Disconnected! Reconnecting...');
    setTimeout(() => { location.reload(); }, 5000); 
});
