import Layout from "../Layout";
import style from "./Header.module.css";

export const Header = () => {
    console.log(style);
    return (
        <header className={style.header}>
            <Layout>sss</Layout>
        </header>
    );
};
