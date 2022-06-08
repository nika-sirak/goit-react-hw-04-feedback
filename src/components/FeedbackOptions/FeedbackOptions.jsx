
import PropTypes from 'prop-types'



function FeedbackOptions({options, onLeaveFeedback }) {
    return (
      <div>
        {Object.keys(options).map(key =>
          <button
            type="button"
            key={key}
            onClick={() => onLeaveFeedback(key)}>
            {key[0].toUpperCase() + key.slice(1)}
          </button>)}
      </div>
      )
  }

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions