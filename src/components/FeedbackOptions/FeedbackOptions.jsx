import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map(key => (
        <button
          type="button"
          className={s.btn}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
