import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transaction_history}>
      <thead className={css.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr className={css.line} key={transaction.id}>
              <td
                className={css.column}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                {transaction.type}
              </td>
              <td
                className={css.column}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                {transaction.amount}
              </td>
              <td
                className={css.column}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                {transaction.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
