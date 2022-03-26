import React, { useEffect, useState } from 'react';
import styles from './Questions.module.css';
import logo from '../../logo.svg';
import Question from './Question/Question';

const Questions = () => {
    const [questions, setQuestions] = useState([]);

    //Getting questions data from questions data json
    useEffect(() => {
        fetch('questions-data.json')
            .then(response => response.json())
            .then(data => setQuestions(data))
    }, [])

    return (
        <div className={styles.questionsSection}>
            <h1>React Interview Questions</h1>
            <div className={styles.questionsContainer}>
                <div className={styles.imageContainer}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.questions}>
                    {
                        questions.map(question => <Question 
                            key={question.id}
                            question={question.question}
                            answer={question.answer}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;