const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'dynamic-8.magmanode.com', // Yahan MagmaNode ka IP likhein
    port: :25944,           // Yahan port likhein
    username: 'Bot', 
    version: '1.21.11'
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
