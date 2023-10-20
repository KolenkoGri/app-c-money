import style from "./Logo.module.scss";
import Logotip from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

export const Logo = () => (
    <div className={style.logo}>
        <NavLink to="/accounts">
            <img src={Logotip} alt="Логотип компании C-Money" />
            <h1 className={style.title}>C-Money</h1>
        </NavLink>
    </div>
);
