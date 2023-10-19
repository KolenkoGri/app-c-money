import { clearToken } from "../../../store/token/tokenReducer";
import style from "./Menu.module.css";

export const Menu = () => {
    const handleEscape = () => {
        clearToken();
    };
    return (
        <ul className={style.menu}>
            <li className={style.item}>Счета</li>
            <li className={style.item}>Обмен</li>
            <li className={style.item} onClick={handleEscape}>
                Выйти
            </li>
        </ul>
    );
};
