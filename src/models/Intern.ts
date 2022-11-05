import mongoose from "mongoose";

const InternSchema = new mongoose.Schema({
        firstname: {type: String},
        lastname: {type: String},
        group: {type: String},
        description: {type: String},
        imgUrl: {type: String, default: ''},
        themes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Theme'}],
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
        rating: {type: Number, default: 0}
    },
    {timestamps: true}
)

export default mongoose.model('Intern', InternSchema)