import mongoose from "mongoose";

const standupSchema = new mongoose.Schema({
    teamMemberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teamMember',
    },
    teamMember: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    workYesterday: {
        type: String,
        required: true
    },
    workToday: {
        type: String,
        required: true
    },
    impediment: {
        type: String,
        required: true,
        default: 'none'
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Standup = mongoose.model('Standup', standupSchema);

export default Standup;