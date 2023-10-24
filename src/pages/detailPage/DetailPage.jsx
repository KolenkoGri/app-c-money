import { NavLink, useParams } from "react-router-dom";
import style from "./DetailPage.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircleLoader from "react-spinners/CircleLoader";
import DetailChart from "../../components/DetailChart";
import TransactionHistory from "../../components/TransactionHistory";
import { detailRequestAsync } from "../../store/detail/detailAction";
import AccountStatistic from "../../components/AccountStatistic";
import Transactions from "../../components/Transactions";

export const DetailPage = () => {
    const token = useSelector((state) => state.token.token);
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [account, setAccount] = useState(null);
    const override = {
        display: "block",
        margin: "0 auto",
    };

    useEffect(() => {
        detailRequestAsync(token, id, setLoaded, setAccount);
    }, [id, token]);
    return (
        <div className={style.detail}>
            <div className={style.titleBox}>
                <h2 className={style.title}>Счет №{id}</h2>
                <NavLink className={style.link} to={`/accounts`}>
                    <button className={style.button}>Вернуться</button>
                </NavLink>
            </div>

            <div className={style.detailInner}>
                <div className={style.innerBlock}>
                    <h2 className={classNames(style.innerTitle, style.hidden)}>
                        Динамика
                    </h2>
                    <div className={style.innerBody}>
                        {loaded ? (
                            <DetailChart value={account} />
                        ) : (
                            <CircleLoader
                                color="#FFF"
                                size="250px"
                                cssOverride={override}
                            />
                        )}
                    </div>

                    <div className={style.innerBlock}>
                        <h2
                            className={classNames(
                                style.innerTitle,
                                style.marginTop
                            )}
                        >
                            Статистика
                        </h2>
                        <div className={style.doughnut}>
                            {loaded ? (
                                <AccountStatistic value={account} />
                            ) : (
                                <CircleLoader
                                    color="#FFF"
                                    size="250px"
                                    cssOverride={override}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={style.innerBlock}>
                    <h2 className={style.innerTitle}>История переводов</h2>
                    <div className={style.history}>
                        {loaded ? (
                            <TransactionHistory value={account} />
                        ) : (
                            <CircleLoader
                                color="#FFF"
                                size="250px"
                                cssOverride={override}
                            />
                        )}
                    </div>
                </div>
            </div>

            <Transactions account={id} />
        </div>
    );
};
