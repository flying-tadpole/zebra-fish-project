const { Schema, model } = require("mongoose");

const fishSchema = new Schema({
    cageCard: {
        type: String,
        required: true,
        unique: true
    },
    lab: {
        type: Schema.Types.ObjectId,
        ref: "Lab"
    },
    strain: {
        type: String
    },
    location: {
        system: String,
        rack: String,
        column: String,
        row: Number,
        tankSize: String
    },
    dateOfHatch: {
        type: Date
    }
})

const Fish = model("Fish", fishSchema)

module.exports = Fish