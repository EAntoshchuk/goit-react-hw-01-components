import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr>
              <td style={{ backgroundColor: getRandomHexColor() }}>
                {transaction.type}
              </td>
              <td style={{ backgroundColor: getRandomHexColor() }}>
                {transaction.amount}
              </td>
              <td style={{ backgroundColor: getRandomHexColor() }}>
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
  transactions: PropTypes.array.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
