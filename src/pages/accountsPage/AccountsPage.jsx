import style from "./AccountsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Account } from "../../components/Account/Account";
import { useEffect } from "react";
import { accountsRequestAsync } from "../../store/accounts/accountsAction";
import { newAccRequestAsync } from "../../store/newAccount/newAccountAction";
import { updateAccounts } from "../../store/accounts/accountsSlice";
import { useUser } from "../../hooks/useUser";
import { CircleLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

export const AccountsPage = () => {
    const token = useSelector((state) => state.token.token);
    const username = useUser();
    const accounts = useSelector((state) => state.accounts.accounts);
    const dispatch = useDispatch();
    const status = useSelector((state) => state.accounts.status);

    useEffect(() => {
        if (token) {
            dispatch(accountsRequestAsync());
        }
    }, [token]);

    const handleOpen = async () => {
        newAccRequestAsync();
    };

    const handleSortChange = (e) => {
        const target = e.target.value;
        let newArr = [...accounts];
        if (!target) {
            dispatch(accountsRequestAsync());
            return;
        }

        const dateToMillis = (date) => {
            return Date.parse(date) - Date.parse("1970-01-01T00:00:00.000Z");
        };
        newArr.sort((a, b) => {
            if (target === "date") {
                if (
                    dateToMillis(new Date(a[target])).toString() >
                    dateToMillis(new Date(b[target])).toString()
                ) {
                    return 1;
                }
                if (
                    dateToMillis(new Date(a[target])).toString() <
                    dateToMillis(new Date(b[target])).toString()
                ) {
                    return -1;
                }
                return 0;
            } else if (target === "transactions") {
                if (
                    dateToMillis(new Date(a[target][0]?.date)).toString() >
                    dateToMillis(new Date(b[target][0]?.date)).toString()
                ) {
                    return 1;
                }
                if (
                    dateToMillis(new Date(a[target][0]?.date)).toString() <
                    dateToMillis(new Date(b[target][0]?.date)).toString()
                ) {
                    return -1;
                }
                return 0;
            } else {
                if (a[target] > b[target]) {
                    return 1;
                }
                if (a[target] < b[target]) {
                    return -1;
                }
                return 0;
            }
        });
        dispatch(updateAccounts(newArr));
    };

    return token && username ? (
        status === "loaded" ? (
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
                            <option value="date">Дате открытия счёта</option>
                            <option value="transactions">
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
        ) : (
            <CircleLoader color="#FFF" size="250px" />
        )
    ) : (
        <Navigate to="/" />
    );
};
