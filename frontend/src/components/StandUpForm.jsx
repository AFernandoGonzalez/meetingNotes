export function StandUpForm({
    formData,
    teamMembers,
    projects,
    onCreateStandUp,
    onTeamMemberChange,
    onProjectChange,
    onInputChange,
}) {
    return (
        <div className=" mt-5">
            <form onSubmit={(e) => onCreateStandUp(e)}>
                <div className="mb-3">
                    <label htmlFor="teamMember" className="form-label fw-bold">
                        Team Member
                    </label>
                    <select
                        className="form-select"
                        onChange={onTeamMemberChange}
                        value={formData.teamMemberById}
                        name="teamMember"
                        id="teamMember"
                        required
                    >
                        <option value="">Select a team member</option>
                        {teamMembers.map((member) => (
                            <option key={member._id} value={member._id}>
                                {member.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="project" className="form-label fw-bold">
                        Project
                    </label>
                    <select
                        className="form-select"
                        onChange={onProjectChange}
                        value={formData.projectId}
                        name="project"
                        id="project"
                        required
                    >
                        <option value="">Select a project</option>
                        {projects.map((project) => (
                            <option key={project._id} value={project._id}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="workYesterday" className="form-label fw-bold">
                        Work Yesterday
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={onInputChange}
                        value={formData.workYesterday}
                        name="workYesterday"
                        id="workYesterday"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="workToday" className="form-label fw-bold">
                        Work Today
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={onInputChange}
                        value={formData.workToday}
                        name="workToday"
                        id="workToday"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="impediment" className="form-label fw-bold">
                        Impediment
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={onInputChange}
                        value={formData.impediment}
                        name="impediment"
                        id="impediment"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Create Standup
                </button>
            </form>
        </div>
    );
}

export default StandUpForm;
