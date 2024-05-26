var mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  foo: {
    required: true,
    type: String,
  },
});

export default mongoose.models.entries || mongoose.model("entries", dataSchema);
