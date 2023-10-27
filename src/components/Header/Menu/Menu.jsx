import { useDispatch } from "react-redux";
import { clearToken, updateToken } from "../../../store/token/tokenReducer";
import style from "./Menu.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { updateUser } from "../../../store/user/userReducer";

export const Menu = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEscape = () => {
        clearToken();
        dispatch(updateToken(""));
        dispatch(updateUser(""));
        localStorage.setItem("token", "");
        Navigate("/");
    };
    return (
        <ul className={style.menu}>
            <li className={style.item}>
                <NavLink to="/accounts">Счета </NavLink>
            </li>
            <li className={style.item}>
                <NavLink to="/exchange">Обмен </NavLink>
            </li>
            <li className={style.item} onClick={handleEscape}>
                Выйти
            </li>
        </ul>
    );
};
