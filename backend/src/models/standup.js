import mongoose from "mongoose";

const standupSchema = new mongoose.Schema({
    teamMemberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TeamMember',
        required: [true, 'Team member ID is required.'],
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: [true, 'Project ID is required.'],
    },
    teamMember: {
        type: String,
        required: [true, 'Team member name is required.'],
        trim: true,
        minlength: [1, 'Team member name must be at least 1 character.'],
        maxlength: [100, 'Team member name cannot exceed 100 characters.'],
    },
    project: {
        type: String,
        required: [true, 'Project name is required.'],
        trim: true,
        minlength: [1, 'Project name must be at least 1 character.'],
        maxlength: [100, 'Project name cannot exceed 100 characters.'],
    },
    workYesterday: {
        type: String,
        required: [true, 'Work yesterday is required.'],
    },
    workToday: {
        type: String,
        required: [true, 'Work today is required.'],
    },
    impediment: {
        type: String,
        default: 'none',
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const Standup = mongoose.model('Standup', standupSchema);

export default Standup;
