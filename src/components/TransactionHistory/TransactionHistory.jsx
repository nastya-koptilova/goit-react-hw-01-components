import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionHistoryData } from 'components/TransactionHistoryData/TransactionHistoryData';

function TransactionHistory({ items }) {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(({ type, amount, currency, id }) => (
          <TransactionHistoryData
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array
};
