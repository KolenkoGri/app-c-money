import Layout from "../Layout";
import style from "./Header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

export const Header = () => {
    return (
        <header className={style.header}>
            <Layout>
                <div className={style.block}>
                    <Logo />
                    <Menu />
                </div>
            </Layout>
        </header>
    );
};
