const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    states: [{
        name: {
            type: String,
            required: true
        }, 
        confirmed: {
            type: Number, 
            required: true
        }, 
        admission: {
            type: Number,
            required: true
        },
        discharged: {
            type: Number,
            required: true
        },
        deaths: {
            type: Number,
            required:true
        }
    }],
    date: {
        type: Date,
        required: true
    }
},
{ timestamps: true });

module.exports = mongoose.model('Report', ReportSchema)