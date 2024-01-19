const { Schema, model } = require("mongoose");

const labSchema = new Schema({
    pi: {
        type: String,
        required: true,
        unique: true
    },
    protocols: [{
        type: String,
        unique: true
    }]
})

const Lab = model("Lab", labSchema)

module.exports = Lab