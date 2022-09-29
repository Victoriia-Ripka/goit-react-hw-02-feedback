import React from "react"
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./Buttons"
import { Section } from "./Section"
import { SectionStyled, Text } from "./styles.styled"

export class Counter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    // onLeaveFeedback = e => {
    //     switch(e.target.textContent){
    //         case 'Good' : 
    //             this.setState(prevState => {
    //             return {good: prevState.good + 1}
    //             })
    //             break
    //         case 'Neutral': 
    //             this.setState(prevState => {
    //             return {neutral: prevState.good + 1}
    //             })
    //             break        
    //         case 'Bad' : 
    //             this.setState(prevState => {
    //             return {bad: prevState.good + 1}
    //             })
    //             break
    //     }
    // }

    onLeaveFeedback = e => {
        this.setState(prevState => {
        return {good: prevState.good + 1}})
    }


    countTotalFeedback = e => {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedback = e => {
        const a = Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
        if (isNaN(a))
            return 0
        else return a
    }

    render() {
        const options = ["Good", "Neutral", "Bad"]

        return (
            <SectionStyled>
                 <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                { !this.countTotalFeedback() ? (<Text>No feedback given</Text>) : (<Section title="Statistics">
                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedback()}/>
                </Section>)}
            </SectionStyled>
        )
    }
}