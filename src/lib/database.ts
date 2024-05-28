var mongoose = require("mongoose");

export async function mongodb() {
    return mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}
