import style from "./LoginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tokenRequestAsync } from "../../store/token/tokenAction";

export const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [formTitle, setFormTitle] = useState("Вход в аккаунт");
    const [formTitleStyle, setFormTitleStyle] = useState(style.title);

    const handleLoginChange = (e) => {
        const target = e.target;
        setLogin(target.value);
        setFormTitle("Вход в аккаунт");
        setFormTitleStyle(style.title);
    };

    const handlePasswordChange = (e) => {
        const target = e.target;
        setPassword(target.value);
        setFormTitle("Вход в аккаунт");
        setFormTitleStyle(style.title);
    };

    const handleSubmit = async () => {
        if (/^[A-Za-z]\w{5,}/.test(login) && /\w{6,}/.test(password)) {
            await tokenRequestAsync(login, password, dispatch);
            Navigate("/accounts");
        } else {
            setFormTitle("Ошибка ввода логина или пароля");
            setFormTitleStyle(style.titleError);
        }
    };

    return (
        <div className={style.body}>
            <h2 className={formTitleStyle}>{formTitle}</h2>
            <div className={style.group}>
                <label className={style.label}>Логин</label>
                <input
                    className={style.input}
                    name="login"
                    type="text"
                    tabIndex={1}
                    value={login}
                    onChange={handleLoginChange}
                />
            </div>
            <div className={style.group}>
                <label className={style.label}>Пароль</label>
                <input
                    className={style.input}
                    name="password"
                    type="password"
                    tabIndex={2}
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div tabIndex={3}>
                <button className={style.button} onClick={handleSubmit}>
                    <span className={style.value}>Войти</span>
                </button>
            </div>
        </div>
    );
};
