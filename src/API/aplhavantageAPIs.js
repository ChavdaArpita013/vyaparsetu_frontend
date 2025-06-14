import axios from "axios";

const callAvAPI = async (paramsObj) => {
    const AV_API_URL = import.meta.env.VITE_AV_API_URL;
    const AV_API_KEY = import.meta.env.VITE_AV_API_KEY;
    
    try {
        const url = new URL(`${AV_API_URL}/query`);

        for (const [key, value] of Object.entries(paramsObj)) {
            if (value != undefined && value != null) {
                url.searchParams.append(key, value);
            }
        }

        url.searchParams.append("apikey", AV_API_KEY);

        const res = await axios.get(url.toString())
        console.log(res.data);
        
        return res.data;
    } catch (error) {
        console.log("error fetching data ", error);

    }
}

export {callAvAPI}