const mongoose = require('mongoose')

const Schema = mongoose.Schema
const birthdaySchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        cohort_number: {
            type: String,
            required: true, 
            trim: true,
        },
        month: {
            type: String,
            required: true, 
            trim: true,
        },
        date: {
            type: String,
            required: true, 
            trim: true,
        }
    }
)

const Birthday = mongoose.model('Birthday', birthdaySchema);

module.exports = Birthday;