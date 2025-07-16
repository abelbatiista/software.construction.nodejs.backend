const mongoose = require('mongoose');
const { AuditableSchema } = require('./schemas');

const CategorySchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ...AuditableSchema,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Category', CategorySchema);
