const { Schema, model } = require('mongoose');

module.exports = model('shortenplus-redirect', new Schema({
    redirect: {
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