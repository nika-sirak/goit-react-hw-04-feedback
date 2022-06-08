import PropTypes from 'prop-types'

function Statistics({good, neutral, bad, total,positivePercentage}) { 
    return (
      <div>
        <p>Statistics</p>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage ? positivePercentage : 0}%</li>
        </ul>
      </div>
      )
  }
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
export default Statistics