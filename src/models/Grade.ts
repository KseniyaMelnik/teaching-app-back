import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
    intern_id: {
        type: String,
        required: true,
    },
    theme_id: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
},
    {timestamps: true})

export default mongoose.model('Grade', GradeSchema)