import React from 'react';
import { RadioWrapper } from './components'

const DifficultySelector = ({ changeDifficulty }) => {
    return (
        <RadioWrapper>
            <p>Select a difficulty level:</p>
            <div>
                <input onChange={({ target }) => changeDifficulty(target.value)} type="radio" id="hard" name="difficulty" value="hard"
                    defaultChecked />
                <label htmlFor="hard">Hard</label>
            </div>

            <div>
                <input onChange={({ target }) => changeDifficulty(target.value)}  type="radio" id="med" name="difficulty" value="medium" />
                <label htmlFor="med">Medium</label>
            </div>

            <div>
                <input onChange={({ target }) => changeDifficulty(target.value)} type="radio" id="ez" name="difficulty" value="easy" />
                <label htmlFor="ez">Easy</label>
            </div>
        </RadioWrapper>
    )
}


export default DifficultySelector;