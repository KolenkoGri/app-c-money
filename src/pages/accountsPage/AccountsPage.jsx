import style from "./AccountsPage.module.css";

import { useSelector } from "react-redux";

export const AccountsPage = () => {
    const username = useSelector((state) => state.user.user);

    return (
        <>
            <section className={style.accounts}>
                <h2>Здравствуйте, {username}</h2>
                <button className={style.button}>
                    <span className={style.value}>Открыть новый счет</span>
                </button>
            </section>
        </>
    );
};
