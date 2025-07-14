const AuditableSchema = {
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  createdBy: {
    type: String,
    trim: true,
  },
  updatedAt: {
    type: Date,
    immutable: true,
  },
  updatedBy: {
    type: String,
    trim: true,
  },
  updatedCount: {
    type: Number,
    default: 0,
  },
  deletedAt: {
    type: Date,
    immutable: true,
  },
  deletedBy: {
    type: String,
    trim: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
};

module.exports = AuditableSchema;
