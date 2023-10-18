import style from "./Main.module.css";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
    return <main className={style.main}>{children}</main>;
};
Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]),
};
