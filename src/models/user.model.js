const mongoose = require('mongoose');
const { AuditableSchema } = require('./schemas');

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'guest'],
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    causes: {
      type: Array,
      required: false,
    },
    ...AuditableSchema,
  },
  { timestamps: true },
);

UserSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();

  if (!update.$inc) {
    update.$inc = {};
  }

  update.$inc.updatedCount = 1;

  this.setUpdate(update);
  next();
});

module.exports = mongoose.model('User', UserSchema);
