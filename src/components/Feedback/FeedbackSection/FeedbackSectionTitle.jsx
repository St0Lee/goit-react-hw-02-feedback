import styles from "./FeedbackSection.module.css"

const FeedbackSectionTitle = ({title, children}) => {
    return (
        <div className = {styles.section}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </div>
    )
};

export default FeedbackSectionTitle;