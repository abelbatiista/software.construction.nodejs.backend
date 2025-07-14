const mongoose = require('mongoose');
const { AuditableSchema } = require('./schemas');

const CreditCardSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    cvc: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    ...AuditableSchema,
  },
  { timestamps: true },
);

module.exports = mongoose.model('CreditCard', CreditCardSchema);
