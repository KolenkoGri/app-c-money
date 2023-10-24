import axios from "axios";
import { API_URL } from "../../api/const";

export const detailRequestAsync = async (token, id, setLoaded, setAccount) => {
    await axios(`${API_URL}/account/${id}`, {
        headers: {
            Authorization: `Basic ${token}`,
        },
    })
        .then(({ data }) => {
            setLoaded(true);
            setAccount(data.payload);
        })
        .catch((err) => ({ error: err.toString() }));
};
