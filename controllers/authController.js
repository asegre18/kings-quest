const jwt = require('jsonwebtoken');
const { User } = require('../model');

const tokenForUser = (id) => {
  return jwt.sign({
    sub: id,
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

module.exports = {
  signIn: (req, res) => {
    console.log('I AM THE LOGGED IN USER', req.user);
    res.json({token: tokenForUser(req.user._id), nickname: req.user.nickname, gender: req.user.gender});
  },
  signUp: async (req, res) => {
    const { email, password, nickname, gender, avatar } = req.body;
    console.log(req.body);
    try {
      const user = await User.create({ email, password, nickname, gender, avatar });
      res.json(tokenForUser(user._id));
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },
  signOut: (req, res) => {
    req.logOut();
    res.json({ success: 'You are now logged out' });
  },
};
