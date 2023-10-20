import style from "./LoginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tokenRequestAsync } from "../../store/token/tokenAction";
import { useToken } from "../../hooks/useToken";

export const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const token = useSelector((state) => state.token.token);
    useToken(token);

    const handleLoginChange = (e) => {
        const target = e.target;
        setLogin(target.value);
    };

    const handlePasswordChange = (e) => {
        const target = e.target;
        setPassword(target.value);
    };

    const handleSubmit = async () => {
        tokenRequestAsync(login, password, dispatch);
    };

    return token ? (
        Navigate("/accounts")
    ) : (
        <div className={style.body}>
            <h2 className={style.title}>Вход в аккаунт</h2>
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
