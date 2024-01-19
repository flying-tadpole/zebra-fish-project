const { Schema, model } = require("mongoose");


const tankSchema = new Schema({
    tankSize: {
        type: String,
        required: true,
        unique: true
    },
    tankStock: {
        type: Number,
        required: true
    }
})

const Tank = model("Tank", tankSchema)

module.exports = Tank