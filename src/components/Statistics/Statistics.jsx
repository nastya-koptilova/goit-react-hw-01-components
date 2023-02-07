import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : title}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

StatisticsItem.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
