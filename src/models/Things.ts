var mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String,
      },
    description: {
        required: true,
        type: String,
    },
});

export default mongoose.models.things || mongoose.model("things", dataSchema);
