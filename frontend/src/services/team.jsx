import axios from "axios";
import { API_URL } from "../constants";
export const getTeamMembers = async () => {
    try {
        const res = await axios.get(`${API_URL}/team`)
        return res.data
    } catch (error) {
        console.error(error);
    }
}


