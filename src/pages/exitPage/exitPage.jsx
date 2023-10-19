import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateToken } from "../../store/token/tokenReducer";
import { updateUser } from "../../store/user/userReducer";

export const ExitPage = () => {
    const dispatch = useDispatch();

    dispatch(updateToken(""));
    dispatch(updateUser(""));
    localStorage.setItem("token", "");

    return <Navigate to="/" />;
};
