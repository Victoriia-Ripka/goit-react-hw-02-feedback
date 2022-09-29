import PropTypes from 'prop-types'
import { Btn } from "./styles.styled"


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
           { options.map((option, index) => {
                return (
                    <Btn key={index} type="button" onClick={onLeaveFeedback}>{option}</Btn>
                )
            })}
        </>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(
       PropTypes.string.isRequired
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}