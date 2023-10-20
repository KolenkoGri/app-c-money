import { NavLink } from "react-router-dom";
import style from "./Page404.module.css";

export const Page404 = () => (
    <>
        <h2 className={style.title}>Ошибка 404. Страница не существует</h2>
        <p>
            Запрошенная Вами страница не существует, воспользуйтесь главным
            меню.
        </p>
        <br />
        <br />

        <h2>
            <NavLink to="/accounts">
                Нажмите сюда, чтобы вернуться на главную
            </NavLink>
        </h2>
    </>
);
