import Button from "../../components/Button";
import style from "./Login.module.scss";

export const Login = () => {
    return (
        <div className={style.body}>
            <h2 className={style.title}>Вход в аккаунт</h2>
            <div className={style.group}>
                <label className={style.label}>Логин</label>
                <input
                    className={style.input}
                    name="login"
                    type="text"
                    tabIndex={1}
                />
            </div>
            <div className={style.group}>
                <label className={style.label}>Пароль</label>
                <input
                    className={style.input}
                    name="passwd"
                    type="password"
                    tabIndex={2}
                />
            </div>
            <div className={style.buttonBox} tabIndex={3}>
                <Button value="Войти" styles={style.button} />
            </div>
        </div>
    );
};
