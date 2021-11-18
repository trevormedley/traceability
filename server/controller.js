const players = require('./db.json');

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players);
    },
    createPlayers: (req, res) => {
        const newPlayer = {
            id: players.length + 1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            position: req.body.position,
            imageURL: req.body.imageURL,
        };
        players.push(newPlayer)
        res.status(200).send(players)
    }
}