import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats, total, positivePercentage }) {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        {stats.map(([name, value]) => (
          <li className={s.item} key={name}>
            {name}: {value}
          </li>
        ))}
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
