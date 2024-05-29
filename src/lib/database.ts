const mongoose = require("mongoose");

export async function mongodb() {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}
