import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        interns: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Intern'
        }]
    },
    {timestamps: true}
)

export default mongoose.model('Teacher', TeacherSchema)