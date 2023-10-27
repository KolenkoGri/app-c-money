import style from "./TransactionHistory.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export const TransactionHistory = ({ value }) => {
    const transactions = value.transactions.reverse();
    const newTrans = [...transactions].slice(0, 8);
    const deposite = (from, to) => (from === value.account ? to : from);
    const balance = (from) => (from === value.account ? -1 : 1);

    return (
        <table>
            <thead>
                <tr>
                    <th width="50%" className={style.tableHead}>
                        Счет
                    </th>
                    <th width="25%" className={style.tableHead}>
                        Сумма
                    </th>
                    <th width="25%" className={style.tableHead}>
                        Дата
                    </th>
                </tr>
            </thead>
            <tbody>
                {newTrans.map((item) => {
                    return (
                        <tr key={new Date(item.date).getTime()}>
                            <td className={style.tableCell}>
                                {deposite(item.from, item.to)}
                            </td>
                            <td
                                className={
                                    balance(item.from) > 0
                                        ? style.tableCell
                                        : classNames(
                                              style.tableCell,
                                              style.negative
                                          )
                                }
                            >
                                {item.amount * balance(item.from, item.to)}
                            </td>
                            <td className={style.tableCell}>
                                {new Date(item.date).toLocaleDateString()}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    value: PropTypes.object,
};
