import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: 'none'
    },
    setActive : {
        type: Boolean,
        required: true,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;