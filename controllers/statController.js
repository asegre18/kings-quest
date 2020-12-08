const db = require('../model');


module.exports = {
    createStat: async (req, res) => {
        const { wins, losses, totalGames } = req.body;
        try {
            const newStat = await db.Stats.create({
                wins,
                losses,
                totalGames,
                user: req.user._id,
            });
            req.user.stats.push(newStat._id);
            await req.user.save();
            res.json(newStat);
        } catch (e) {
            console.log('L:18 statController', e);
            res.status(401).json(e);
        }
    },
    getAllStats: async (req, res) => {
        try {
            res.json(await db.Stats.find());
        } catch (e) {
            console.log('L:26 statController', e);
            res.status(401).json(e);
        }
    },
    getStatsById: async (req, res) => {
        try {
            res.json(await db.Stats.findById(req.params.id));
            console.log('I AM USER._ID', req.params.id);
        } catch (e) {
            console.log('L:35 statController', e);
            res.status(401).json(e);
        }
    },
    // deleteStatById: async (req, res) => {
    //     try {
    //         console.log('Stat Deleted Successfully');
    //         res.json(await db.Stats.findByIdAndDelete(req.params.id));
    //     } catch (e) {
    //         console.log('L:45 statController', e);
    //         res.status(401).json(e);
    //     }
    // },
    updateStatById: async (req, res) => {
        try {
            const { wins, losses, totalGames } = req.body;
            res.json(await db.Stats.findByIdAndUpdate(req.params.id, {
                wins,
                losses,
                totalGames,
            },{
                new: true,
            }));
        } catch (e) {
            console.log('L:60 statController', e);
            res.status(401).json(e);
        }
    },
    getAllStatsByAllUsers: async (req, res) => {
        try {
            // const allUsers = await db.User.find().populate('stats');
            // console.log(JSON.stringify(allUsers, null, 2));
            const allStats = await db.Stats.find().populate('user');
            console.log(JSON.stringify(allStats, null, 2));
            res.json(await db.Stats.find());
        } catch (e) {
            console.log('L:71 statController', e);
            res.status(401).json(e);
        }
    },
};