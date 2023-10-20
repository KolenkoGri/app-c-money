import style from "./AccountsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Account } from "../../components/Account/Account";
import { useEffect } from "react";
import { accountsRequestAsync } from "../../store/accounts/accountsAction";
import { newAccRequestAsync } from "../../store/newAccount/newAccountAction";

export const AccountsPage = () => {
    const token = useSelector((state) => state.token.token);
    const username = useSelector((state) => state.user.user);
    const accounts = useSelector((state) => state.accounts.accounts);
    console.log("accounts: ", accounts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(accountsRequestAsync());
        }
    }, [token]);

    const handleOpen = async () => {
        newAccRequestAsync();
    };

    const handleSortChange = async () => {
        // Запрос
    };

    return (
        <>
            <section className={style.accounts}>
                <div className={style.titleBox}>
                    <h2>Здравствуйте, {username}</h2>
                    <button className={style.button} onClick={handleOpen}>
                        <span className={style.value}>Открыть новый счет</span>
                    </button>
                </div>
                <div className={style.listHeader}>
                    <h3 className={style.listTitle}>Мои счета</h3>
                    <div>
                        <span>Сортировка по:</span>
                        <select
                            className={style.sortParam}
                            onChange={handleSortChange}
                        >
                            <option value="">умолчанию</option>
                            <option value="account">номеру счета</option>
                            <option value="balance">балансу</option>
                            <option value="transaction">
                                последней транзакции
                            </option>
                        </select>
                    </div>
                </div>
                <div className={style.accountsList}>
                    {accounts.map((elem) => (
                        <Account key={elem.account} data={elem} />
                    ))}
                </div>
            </section>
        </>
    );
};
