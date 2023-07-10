const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  monthId: { type: String, required: true, unique: true },
  cards: [
    {
      cardName: { type: String, required: true },
      isIncame: { type: Boolean, required: true },
      records: [
        {
          recordName: { type: String, required: true },
          recordValue: { type: Number, required: true },
        },
      ],
    },
  ],
});

const Month = mongoose.model("Month", monthSchema);

module.exports = mongoose.model("Month", monthSchema);
