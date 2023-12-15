import axios from "axios";

export const getProjects = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/projects')
        return res.data
    } catch (error) {
        console.error(error);
    }
}