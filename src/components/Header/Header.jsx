import { useToken } from "../../hooks/useToken";
import Layout from "../Layout";
import style from "./Header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

export const Header = () => {
    const token = useToken();
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
