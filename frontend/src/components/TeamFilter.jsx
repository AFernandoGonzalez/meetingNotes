import React, { useState } from 'react';

export const TeamFilter = ({ teamMembers, teamMemberById, onTeamMemberFilterChange }) => {
    // const [filterTeamMemberById, setFilterTeamMemberById] = useState('');

    return (
        <div className="">
            {/* Tailwind style for margin top */}
            <label className="tw-block tw-font-bold tw-mb-1">Filter by team member</label>
            {/* Tailwind styles for block, font weight, and margin bottom */}
            <select
                className="form-select tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded tw-bg-gray-200"
                // Bootstrap form-select class and Tailwind styles for width, padding, border, and background color
                onChange={onTeamMemberFilterChange}
                value={teamMemberById}
            >
                <option value="">Select a team member</option>
                <option value="all">All team members</option>
                {teamMembers.map((member) => (
                    <option key={member._id} value={member._id}>
                        {member.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
