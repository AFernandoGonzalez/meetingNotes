import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Project name is required.'],
        trim: true,
        minlength: [1, 'Project name must be at least 1 character.'],
        maxlength: [100, 'Project name cannot exceed 100 characters.'],
    },
    description: {
        type: String,
        default: 'none',
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters.'],
    },
    setActive: {
        type: Boolean,
        required: [true, 'SetActive status is required.'],
        default: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
