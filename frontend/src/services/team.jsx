import axios from "axios";

export const getTeamMembers = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/team')
        return res.data
    } catch (error) {
        console.log(error);
    }
}


