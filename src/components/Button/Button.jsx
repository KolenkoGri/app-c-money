import style from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = () => (
    <button className={style.button} onClick={onclick}>
        <span className={style.value}>Войти</span>
    </button>
);

Button.propTypes = {
    value: PropTypes.string,
    styles: PropTypes.string,
    onclick: PropTypes.func,
};
