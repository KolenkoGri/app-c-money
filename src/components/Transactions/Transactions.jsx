import style from "./Transactions.module.css";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API_URL } from "../../api/const";
import { useSelector } from "react-redux";

export const Transactions = ({ account }) => {
    const token = useSelector((state) => state.token.token);
    const [moneyTransfert, setMoneyTransfert] = useState(false);
    const [transfertMessage, setTransfertMessage] = useState("");
    const inputToRef = useRef(null);
    const [inputTo, setInputTo] = useState("");
    const inputAmountRef = useRef(null);
    const [inputAmount, setInputAmount] = useState("");

    const handleChangeTo = (e) => {
        if (/\D/.test(e.target.value)) {
            inputToRef.current.value = inputTo;
        } else {
            setInputTo(e.target.value);
        }
    };

    const handleChangeAmount = (e) => {
        if (/^[0-9]*\.?[0-9]{0,2}$/.test(e.target.value)) {
            setInputAmount(e.target.value);
        } else {
            inputAmountRef.current.value = inputAmount;
        }
    };

    const transfert = async () => {
        axios({
            method: "post",
            url: `${API_URL}/transfer-funds`,
            data: {
                from: account,
                to: inputTo,
                amount: inputAmount,
            },
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
            .then(({ data }) => {
                let message = "";
                if (data.payload) {
                    message = "Перевод успешно осуществлен";
                    setMoneyTransfert(true);
                } else if (data.error) {
                    switch (data.error) {
                        case "Invalid account from":
                            message = `Не указан адрес счёта списания,
              или этот счёт не принадлежит нам`;
                            break;
                        case "Invalid account to":
                            message = `Не указан счёт зачисления, или этого счёта
              не существует`;
                            break;
                        case "Invalid amount":
                            message = `Не указана сумма перевода, или она
              отрицательная`;
                            break;
                        case "Overdraft prevented":
                            message = `Мы попытались перевести больше денег, чем доступно
              на счёте списания`;
                            break;
                        default:
                            message = "Непредвиденная ошибка!";
                    }
                    setMoneyTransfert(false);
                }
                setTransfertMessage(message);
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <>
            <h3 className={style.transitionTitle}>Перевод</h3>
            <div className={style.transition}>
                <div className={style.group}>
                    <label className={style.label}>Счет</label>
                    <input
                        className={style.input}
                        ref={inputToRef}
                        onChange={handleChangeTo}
                        onFocus={() => {
                            setTransfertMessage("");
                        }}
                    ></input>
                </div>
                <div className={style.group}>
                    <label className={style.label}>Сумма</label>
                    <input
                        className={style.input}
                        ref={inputAmountRef}
                        onChange={handleChangeAmount}
                        onFocus={() => {
                            setTransfertMessage("");
                        }}
                    ></input>
                </div>
                <div className={style.group}>
                    <button className={style.button} onClick={transfert}>
                        Перевести
                    </button>
                </div>
            </div>
            <p
                className={
                    moneyTransfert
                        ? style.transfertMessageOk
                        : style.transfertMessageError
                }
            >
                {transfertMessage}
            </p>
        </>
    );
};

Transactions.propTypes = {
    account: PropTypes.string,
};
