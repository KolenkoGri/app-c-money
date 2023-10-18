import style from "./Logo.module.css";
import Logotip from "./img/logo.svg";

export const Logo = () => (
    <div className={style.logo}>
        <img src={Logotip} alt="Логотип компании C-Money" />
        <h1 className={style.title}>C-Money</h1>
    </div>
);
