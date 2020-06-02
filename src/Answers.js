import React from 'react'
import { QuizzInput } from './components'


const Answers = ({ answers, confirmAnswer }) => {

    return (
        answers.map(ans => <QuizzInput key={ans} onClick={() => confirmAnswer(ans)}>{ans}</QuizzInput>)
    )
}


export default Answers;