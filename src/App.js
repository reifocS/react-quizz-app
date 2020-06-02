import React, { useState, useEffect } from 'react';
import Game from './Game'
import { EmphasizedInput, AppContainer, SettingsContainer, OptionQuizz, QuizzLabel, QuizzSelect } from './components';
import { getCategories } from './Api'


let categoryCache = null;

function App() {
  const [game, startGame] = useState(false)
  const [categories, setCaterory] = useState([]);

  const [options, setOptions] = useState({
    difficulty: '',
    numberOfQuestions: '',
    category: ''
  })




  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getCategories();
        if (response) {
          setCaterory(response.trivia_categories);
          categoryCache = response.trivia_categories;
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    if (!categoryCache)
      fetchData();
  }, []);


  if (game)
    return (
      <AppContainer>
        <Game options={options} />
      </AppContainer>
    )


  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setOptions({...options, [name] : value })
  }

  const validateOptions = () => {
    return Object.values(options).every(value => value !== '');
  }

  return (
    <AppContainer>
      <SettingsContainer>
        <QuizzLabel htmlFor="category-select">Choose a category:</QuizzLabel>
        <QuizzSelect value={options.category} onChange={handleChange} name="category" id="category-select">
          <OptionQuizz value="">--Please choose a category--</OptionQuizz>
          {categories.map(cat => <OptionQuizz key={cat.id} value={cat.id}>{cat.name}</OptionQuizz>)}
        </QuizzSelect>

        <QuizzLabel htmlFor="category-select">Choose a difficulty:</QuizzLabel>
        <QuizzSelect value={options.difficulty} onChange={handleChange} name="difficulty" id="category-select">
          <OptionQuizz value="">--Please choose a difficulty--</OptionQuizz>
          <OptionQuizz value="easy">Easy</OptionQuizz>
          <OptionQuizz value="medium">Medium</OptionQuizz>
          <OptionQuizz value="hard">Hard</OptionQuizz>

        </QuizzSelect>

        <QuizzLabel htmlFor="category-select">Choose number of question:</QuizzLabel>
        <QuizzSelect value={options.numberOfQuestions} onChange={handleChange} name="numberOfQuestions" id="category-select">
          <OptionQuizz value="">--Please choose a number of question--</OptionQuizz>
          <OptionQuizz value="2">2</OptionQuizz>
          <OptionQuizz value="5">5</OptionQuizz>
          <OptionQuizz value="7">7</OptionQuizz>
          <OptionQuizz value="10">10</OptionQuizz>
        </QuizzSelect>

        <EmphasizedInput disabled={!validateOptions()} onClick={() => startGame(true)}>Start Quizz</EmphasizedInput>
      </SettingsContainer>
    </AppContainer>
  )
}

export default App;
