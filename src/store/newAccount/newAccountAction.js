import axios from "axios";
import { API_URL } from "../../api/const";
import { createAccount } from "../accounts/accountsSlice";

export const newAccRequestAsync = async (token, dispatch) => {
    await axios({
        method: "post",
        url: `${API_URL}/create-account`,
        headers: {
            Authorization: `Basic ${token}`,
        },
    })
        .then(({ data }) => {
            dispatch(createAccount(data.payload));
        })
        .catch((error) => console.log(error.message));
};
