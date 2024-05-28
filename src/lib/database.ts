var mongoose = require("mongoose");

export async function mongodb() {
    return mongoose.connect('mongodb://localhost:27017');
}
