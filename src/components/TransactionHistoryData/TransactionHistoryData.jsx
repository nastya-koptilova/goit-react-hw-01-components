import PropTypes from 'prop-types';
import css from './TransactionHistoryData.module.css';

export function TransactionHistoryData({ type, amount, currency }) {
  return (
    <tr className={css.list}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryData.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
