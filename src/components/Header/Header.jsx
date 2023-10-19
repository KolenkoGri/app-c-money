import { useSelector } from "react-redux";
import Layout from "../Layout";
import style from "./Header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

export const Header = () => {
    const token = useSelector((state) => state.token.token);
    return (
        <header className={style.header}>
            <Layout>
                <div className={style.block}>
                    <Logo />
                    {token && <Menu />}
                </div>
            </Layout>
        </header>
    );
};
