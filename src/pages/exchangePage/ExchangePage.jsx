import { useSelector } from "react-redux";
import style from "./ExchangePage.module.css";
import { RealChange } from "../../components/RealChange/RealChange";
import { ExchangeMoney } from "../../components/ExchangeMoney/ExchangeMoney";

export const ExchangePage = () => {
    const token = useSelector((state) => state.token.token);

    if (!token) return;

    return (
        <div className={style.exchange}>
            <h2 className={style.title}>Обмен валюты</h2>

            <div className={style.inner}>
                <div className={style.box}>
                    <div className={style.innerBlock}>
                        <h4 className={style.innerTitle}>
                            Изменение курса в режиме реального времени
                        </h4>
                        <RealChange />
                    </div>
                </div>

                <ExchangeMoney />
            </div>
        </div>
    );
};
