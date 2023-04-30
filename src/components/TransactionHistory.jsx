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
            <tr key={transaction.id}>
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
