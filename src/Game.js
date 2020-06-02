import React, { useState, useEffect } from 'react'
import { Loader } from './components'
import { getQuestions } from './Api'
import QuestionContainer from './QuestionContainer'
import Answers from './Answers'
import { shuffle } from './utils'
import he from 'he'
import EndGame from './EndGame'

const Game = ({ options }) => {

    const [questions, setQuestions] = useState([])
    const [loading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);
    const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false)
    const [score, incrementScore] = useState(0);
    const [cache, updateCache] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setIsError(false);
            try {
                let response = await getQuestions(options);
                if (response) {
                    setQuestions(response.results);
                }
                else
                    setIsError(true);
            }
            catch (err) {
                setIsError(true);
                console.log(err);
            }

            setIsLoading(false);
        }
        fetchData();
    }, [options]);


    const getNextQuestion = (actualIndex) => {
        let nextIndex = actualIndex + 1;
        if (nextIndex >= parseInt(options.numberOfQuestions))
            setIsFinished(true)
        else
            setActualQuestionIndex(nextIndex);
    }

    const getAnswers = (actualQuestion) => {
        let answers = shuffle([...actualQuestion.incorrect_answers, actualQuestion.correct_answer]);
        answers = answers.map(ans => he.decode(ans))
        return answers;
    }


    const confirmAnswer = (value, actualQuestion) => {
        let correctAnswer = he.decode(actualQuestion.correct_answer)
        if (value === correctAnswer)
            incrementScore(score + 1);
        let updatedCache = [...cache];
        let recap = {
            question: he.decode(actualQuestion.question),
            value: value,
            correct: correctAnswer
        }
        updatedCache.push(recap)
        updateCache(updatedCache);
        getNextQuestion(actualQuestionIndex)
    }



    if (error)
        return <p>Something went wrong</p>
    /*
        if (isFinished)
            return (
                <RecapContainer>
                    <QuizzText>Score {`${score} on ${amountOfQuestion}`}</QuizzText>
                    <Recap bilan={cache}/>
                </RecapContainer>
            )
       */
    if (isFinished)
        return <EndGame points={score} bilan={cache}/>

    let actualQuestion = questions[actualQuestionIndex];

    return (
        <>
            {loading || !actualQuestion ? <Loader /> : (
                <QuestionContainer question={actualQuestion}>
                    <Answers answers={getAnswers(actualQuestion)} confirmAnswer={(value) => confirmAnswer(value, actualQuestion)} />
                </QuestionContainer>)}
        </>
    )
}

export default Game;