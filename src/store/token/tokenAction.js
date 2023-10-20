import axios from "axios";
import { API_URL } from "../../api/const";
import { updateToken } from "./tokenReducer";
import { updateUser } from "../user/userReducer";

export const tokenRequestAsync = async (login, password, dispatch) => {
    await axios({
        method: "post",
        url: `${API_URL}/login`,
        data: {
            login,
            password,
        },
    })
        .then(
            ({
                data: {
                    payload: { token },
                },
            }) => {
                dispatch(updateToken(token));
                dispatch(updateUser(login));
            }
        )
        .catch((error) => {
            console.log(error.message);
        });
};
