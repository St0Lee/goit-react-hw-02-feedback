import styles from "./Feedback.module.css";

const FeedbackOptions = ({options, addRate, children}) => {
    const buttons = options.map(name => <button className = {styles.button} onClick={(() => addRate(name))} key={name}>{name}</button>);
    
    return buttons;
};

export default FeedbackOptions;