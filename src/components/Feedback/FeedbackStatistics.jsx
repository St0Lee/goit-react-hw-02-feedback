// import styles from "./Feedback.module.css";

const FeedbackStatistics = ({total, goodPercentage, good, neutral, bad, children}) => {
   return (
    <>
        <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback:{goodPercentage}%</p>
    </>
    )
};

export default FeedbackStatistics;