import axios from "axios";
import { API_URL } from "../../api/const";
import { updateToken } from "./tokenReducer";
import { updateUser } from "../user/userReducer";
import { UseToken } from "../../hooks/useToken";

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
                UseToken();
            }
        )
        .catch((error) => {
            const newErr = error.response;
            return newErr;
        });
};
