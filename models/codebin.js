const { Schema, model } = require('mongoose');

module.exports = model('codebinplus-document', new Schema({
    content: {
        type: String,
        required: true,
    },
    safeContent: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
        default: 0,
    },
    createdBy: {
        type: String,
        required: true,
    }
}));