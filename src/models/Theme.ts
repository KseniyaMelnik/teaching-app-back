import mongoose from "mongoose";

const ThemeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    grades: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grade'
    }]

})

export default mongoose.model('Theme', ThemeSchema)