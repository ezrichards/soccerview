const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shirtNumber: {
        type: Number,
        required: true
    },
    xPos: {
        type: Number,
    },
    yPos: {
        type: Number
    }
});

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
});

module.exports = {
    Player: mongoose.model('Player', PlayerSchema),
    Team: mongoose.model('Team', TeamSchema),
};