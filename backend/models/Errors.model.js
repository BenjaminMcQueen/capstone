const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
    error: { type: Object, required: true }
},
    { timestamps: true }
);

const ErrorLog = mongoose.model("ErrorLog", errorLogSchema);
module.exports = ErrorLog;