const mongoose = require('mongoose');
const { AuditableSchema } = require('./schemas');

const CauseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    hood: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    needed: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    ...AuditableSchema,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Cause', CauseSchema);
