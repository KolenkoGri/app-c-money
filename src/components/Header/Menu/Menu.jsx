import style from "./Menu.module.css";

export const Menu = () => {
    return (
        <ul className={style.menu}>
            <li className={style.item}>Счета</li>
            <li className={style.item}>Обмен</li>
            <li className={style.item}>Выйти</li>
        </ul>
    );
};
