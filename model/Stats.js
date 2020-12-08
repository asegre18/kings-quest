const { Schema, model,  } = require('mongoose');

const StatsSchema = new Schema({
    wins: {
        type: Number,
    },
    losses: {
        type: Number,
        required: [true, 'age is required'],
    },
    totalGames: {
        type: Number,
        
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Stats = model('Stats', StatsSchema);

module.exports = Stats;