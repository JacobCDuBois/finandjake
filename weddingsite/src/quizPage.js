

import React, { useState } from 'react';
import quizData from "./quizData";
import sunflower from "./bgAssets/sunflower.png";
import bud from "./bgAssets/bud.png";
const QuizPage = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(0);
    const [name, setName] = useState('')
    const handleNameSubmit = (e) => {
        e.preventDefault();
        // setName(nameInput);
        setCurrentQuestionIndex(0); // Start the quiz by setting the first question
    };
    const submitQuizScore = async (quizScore, name) => {
        try {
            const response = await fetch('http://localhost:3001/submit-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quiz_score: score, name: name }),
            });

            if (response.ok) {
                console.log('Quiz score submitted successfully!');
            } else {
                console.error('Error submitting quiz score.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleAnswerClick = (index) => {
        if (index === quizData[currentQuestionIndex].correctAnswer) {
            setScore(score + 1); // Increment score if the answer is correct
        }

        // Move to the next question or finish the quiz
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizData.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setIsQuizFinished(true);
            submitQuizScore()// End the quiz if no more questions
        }
    };
    return (
        <div className="col-md-12 d-flex justify-content-center quiz_page">
            <img src={sunflower} className="rsvp_corner_r"/>
            <img src={bud} className="rsvp_corner_l disappear"/>
            {currentQuestionIndex === false ? (
                    <div className="col-md-6">
                        <div className="row justify-content-left ">
                            <label htmlFor="name" className="rsvpHeader ">Your Name:</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 ">
                                <input
                                    type="text"
                                    value={name}
                                    className="rsvp_input input_box"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <button className="sub_button" onClick={handleNameSubmit}>Start Quiz</button>

                            </div>

                        </div>


                    </div>
                // Ask for the user's name before starting the quiz

            ) : isQuizFinished ? (
                <div className="text-center pt-5">
                    <p className="rsvpHeader">
                        Congratulations!
                        You scored a { ( (score / 14) * 100).toFixed(1)}%
                    </p>
                    <p className="rsvpHeader">Winners and prizes will be announced during the reception! </p>

                </div>
            ) : (
                <div>
                    <p className="rsvpHeader">{quizData[currentQuestionIndex].question}</p>
                    <div>
                        {quizData[currentQuestionIndex].answers.map((answer, index) => (
                            <button key={index} className="sub_button" onClick={() => handleAnswerClick(index)}>
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
