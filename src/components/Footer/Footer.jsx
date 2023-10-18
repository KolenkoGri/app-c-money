import style from "./Footer.module.css";
import Logo from "../Header/Logo";
import Layout from "../Layout";

export const Footer = () => (
    <footer className={style.footer}>
        <Layout>
            <div className={style.footer__block}>
                <Logo />
                <span>&copy; C-Money, 2023</span>
            </div>
        </Layout>
    </footer>
);
