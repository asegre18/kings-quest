const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    // see if a validate for actual email is necessary
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, 'Password is required'],
  },
  nickname: {
    type: String,
    required: [true, 'Nickname is required'],
  },
  gender: {
    type: Number,
    required: [true, 'Please select a gender'],
    // 0: female, 1: male, 2: prefer not to answer
  },
  stats: [ { type: Schema.Types.ObjectId, ref: 'Stats'}],
  // avatar: {
  //   img: {
  //     type: Image,
  //     required: [true, 'Please select an Avatar'],
  //   },
  // },
});
//  static belongs to the full ORM
UserSchema.static({
  findByEmail: function(email) {
    // console.log('I AM THE THIS IN findByEmail', this);
    try {
      return this.find({ email });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
  findOneByEmail: function(email) {
    // console.log('I AM THE THIS IN findByemail', this);
    try {
        // this might not work properly...
      return this.findOne({ email });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
});

// Methods belongs to an instance of the collection

UserSchema.method({ 
    sayMyUsername: function() {
        console.log(this);
        console.log(`I AM ${this.email}`);
    },
    comparePassword: async function(candidatePassword) {
        console.log('THIS IN COMPARE PASSWORD', this);
        try {
            return await bcrypt.compare(candidatePassword, this.password);
        } catch (e) {
            throw new Error(e);
        }
    },
});

UserSchema.pre('save', async function(next) {
    console.log('I AM THIS in PRE HOOK', this);
    const user = this;
    if (user.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            // const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = await bcrypt.hash(user.password, salt);
        } catch (e) {
            next(e);
        }
    } 
    next();
});

const User = model('User', UserSchema);

module.exports = User;
