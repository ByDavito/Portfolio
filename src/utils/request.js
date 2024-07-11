import axios from "axios";

export const request = async (data) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:3000',
            data: data || {},
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response, data);
        return response;
    } catch (error) {
        console.log('mal pibe', error.response ? error.response.data : error.message);
        throw error;
    }
};