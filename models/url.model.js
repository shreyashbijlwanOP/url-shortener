const Mongoose = require("mongoose");

const urlSchema = new Mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectLink: {
      type: String,
      required: true,
    },
    visitedHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const urlModal = Mongoose.model("url", urlSchema);

module.exports = urlModal;
