import PropTypes from 'prop-types';
import { Btn, List } from './styles.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Btn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Btn>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
