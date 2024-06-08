var mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  
});

export default mongoose.models.posts || mongoose.model("posts", dataSchema);
