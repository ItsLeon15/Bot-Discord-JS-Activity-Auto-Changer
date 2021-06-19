client.on('ready', () => { // When the bot turns on
    setInterval(() => {

        const statuses = [
            `${client.guilds.cache.size} servers`, // Enables the bot to show how many servers it's in, in the status
            `${client.channels.cache.size} channels`, // Enables the bot to show how many channels it's in, in the status
            "Music...", // Enables the bot to send a message of your choice
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)] // Chooses a random list from statuses and puts it into a variable.
        client.user.setActivity(status, { type: "LISTENING" }) // Status changer - WATCHING / LISTENING / STREAMING / DND / ONLINE

    }, 

            30000) // Time for status to change - Recommended  = 20,000 (20 Seconds) - API doesn't really allow less values but it will work

});
