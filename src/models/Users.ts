var mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  auth_token: {
    type: String,
  },
});

export default mongoose.models.users || mongoose.model("users", dataSchema);
