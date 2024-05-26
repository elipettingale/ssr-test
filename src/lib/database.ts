var mongoose = require("mongoose");

export async function mongoConnect() {
    return mongoose.connect('mongodb://localhost:27017');
}
