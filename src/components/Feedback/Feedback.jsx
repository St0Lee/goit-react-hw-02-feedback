import { Component } from "react";
import styles from "./Feedback.module.css";
import FeedbackOptions from "./FeedbackOptions";
import FeedbackStatistics from "./FeedbackStatistics";
import FeedbackSectionTitle from "./FeedbackSection/FeedbackSectionTitle";
import Notification from "./Notification/Notification";

class Feedback extends Component{
    static feedbackOptions = ['good', 'neutral', 'bad'];
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

countTotalFeedback() {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
    // const values = Object.values(this.state);
    // const total = values.reduce((acum, value) => acum + value, 0);
};

countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if(!total) {
        return 0;
    }
    const value = this.state.good;
    return Number(((value / total) * 100).toFixed(2));
};

addRate = (keyName)=> {
    console.log(keyName)
    this.setState (prevState => {
        return {
            [keyName]: prevState[keyName] + 1
        }
    })
};



render () {
    const total = this.countTotalFeedback();
    const goodPercentage = this.countPositiveFeedbackPercentage();
    const goodRate = this.state.good;
    const neutralRate = this.state.neutral;
    const badRate = this.state.bad;
   
    return (
        <div className={styles.wrap}>
            
            <FeedbackSectionTitle title = "Please leave your feedback">
            <FeedbackOptions options = {Feedback.feedbackOptions} addRate = {this.addRate} />
            </FeedbackSectionTitle>
            {total ? (
                <FeedbackSectionTitle title="Statistics">
                    <FeedbackStatistics total={total} goodPercentage={goodPercentage} good={goodRate} neutral={neutralRate} bad={badRate} />
                </FeedbackSectionTitle>
            ) : (
                <Notification message="There is no feedback"/>
            )}
        </div>
    )
};
}

export default Feedback;