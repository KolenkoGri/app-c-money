import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
            <Outlet />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]),
};
