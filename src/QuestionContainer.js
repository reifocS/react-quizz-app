import React, {useEffect} from 'react'
import { QuestionWrapper, QuizzText } from './components'
import he from 'he'
const QuestionContainer = ({ question, children }) => {
    
    useEffect(() => {
    }, []);

   
    return (
        <QuestionWrapper>
            <QuizzText>{`Category : ${question.category}`}</QuizzText>
            <QuizzText> {he.decode(question.question)}</QuizzText>
            {children}
        </QuestionWrapper>
    )
}


export default QuestionContainer;