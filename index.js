client.on('ready', () => { // When the bot turns on
    setInterval(() => {

        const statuses = [
            `on ${client.guilds.cache.size} servers`, // Enables the bot to show how many servers it's in, in the status
            `on ${client.channels.cache.size} channels`, // Enables the bot to show how many channels it's in, in the status
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "LISTENING" }) // Status changer - WATCHING / LISTENING / STREAMING / DND / ONLINE

    }, 

            20000) // Time for status to change - Recommended  = 20,000 (20 Seconds) - API doesn't really allow less values but it will work

});
