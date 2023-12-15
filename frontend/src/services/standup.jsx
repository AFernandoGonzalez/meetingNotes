import axios from "axios";

export const getStandUp = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/standup');
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getStandUpByTeamMember = async (teamMemberById) => {
    try {
        const res = await axios.get(`http://localhost:8000/api/standup/${teamMemberById}`)
        return res.data
    } catch (error) {
        console.error(error);
    }
}

export const createStandUp = async (newStandUp) => {
    try {
        const res = await axios.post('http://localhost:8000/api/standup', newStandUp)
        return res.data
    } catch (error) {
        console.error(error);
    }
}