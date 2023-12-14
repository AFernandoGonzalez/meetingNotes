import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Team member name is required.'],
        trim: true,
        minlength: [3, 'Team member name must be at least 3 character.'],
        maxlength: [100, 'Team member name cannot exceed 100 characters.'],
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;
