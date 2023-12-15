import axios from "axios";
import { API_URL } from "../constants";

export const getProjects = async () => {
    try {
        const res = await axios.get(`${API_URL}/projects`)
        return res.data
    } catch (error) {
        console.error(error);
    }
}