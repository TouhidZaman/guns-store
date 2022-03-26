import React from 'react';
import styles from './Question.module.css'

const Question = ({question, answer}) => {
    return (
        <div className={styles.question}>
            <h3>{question}</h3>
            <p>{answer}</p>        
        </div>
    );
};

export default Question;