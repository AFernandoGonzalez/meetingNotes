import axios from "axios";
import { API_URL } from "../constants";
export const getStandUp = async () => {
    try {
        const res = await axios.get(`${API_URL}/standup`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getStandUpByTeamMember = async (teamMemberById) => {
    try {
        const res = await axios.get(`${API_URL}/standup/${teamMemberById}`)
        return res.data
    } catch (error) {
        console.error(error);
    }
}

export const createStandUp = async (newStandUp) => {
    try {
        const res = await axios.post(`${API_URL}/standup`, newStandUp)
        return res.data
    } catch (error) {
        console.error(error);
    }
}