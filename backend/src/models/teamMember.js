import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;