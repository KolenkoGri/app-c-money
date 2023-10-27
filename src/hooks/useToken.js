import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../store/token/tokenReducer";

export const UseToken = () => {
    const dispatch = useDispatch();

    let token = useSelector((state) => state.token.token);

    if (!token) {
        token = localStorage.getItem("token");
        dispatch(updateToken(token));
    } else {
        localStorage.setItem("token", token);
    }

    return token;
};
