import PropTypes from 'prop-types'
import s from './Statistics.module.css'

function Statistics({good, neutral, bad, total,positivePercentage}) { 
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>Positive feedback: {positivePercentage ? positivePercentage : 0}%</li>
        </ul>
      </div>
      )
  }
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}
export default Statistics