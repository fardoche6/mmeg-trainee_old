module.exports = message => {

    const user = message.mentions.users.first();
        // message.channel.send(`
        message.author.send(`The commands are:
        $c 1    --> Contribution of 1 000 000 crystals.
        $summaryday --> give a summary of the last full day (yesterday).
        $summaryweek --> give a summary of the last week.
         `);
}