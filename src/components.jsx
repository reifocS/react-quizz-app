import styled from "styled-components";


export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0066ff;
    height : 100vh;
    width : 100vw;
    font-family: 'Titillium Web', sans-serif;    
`
export const SettingsContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`


export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export const Loader = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`


export const QuestionWrapper = styled.section`
    display : flex;
    flex-direction : column;
    text-align : center;
    width : 40%;
  `


export const RadioWrapper = styled.div`
    display: flex;
    flex-direction : column;
  `

export const RecapContainer = styled.div`
    display : flex;
    flex-direction : column;
  `

export const Bilan = styled.div`
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  `


export const QuizzInput = styled.button`
border-radius: 48.5px;
background-color: #ffffff;
font-size: 18.5px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.19px;
color: #000000;
margin-bottom: 20px;
padding: 18px 64px;
border : none;
cursor : pointer;
&:hover{
    background-color: #d5d5d5;
  }

&:focus{
    outline: none;
}
`

export const EmphasizedInput = styled(QuizzInput)`
    background-color : red; 
    color : white;

    &:disabled {
        background-color : palevioletred;

    }

    &:disabled:hover {
        background-color : palevioletred;

    }
    &:hover{
        background-color : red;
    }
`


export const QuizzTitle = styled.h1`
  color : white;
  font-size : 40px;
`

export const QuizzText = styled.p`
  color: white;
  font-size : 25px;
`


export const TabList = styled.ol`
    border-bottom: 1px solid #ccc;
    padding-left: 0;
`

export const TabItem = styled.li`
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
    cursor : pointer;
`

export const TabItemActive = styled(TabItem)`
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
`

export const TabContainer = styled.div`
    display : flex;
    flex-direction : column;
    background-color: white;
    width : 60vw;
    height : 70vh;
    padding : 30px;
    border-radius: 12px;`



export const TabContent = styled.div`
    overflow-y : auto;
`

export const Table = styled.table`
    border: 1px solid #333;
`
export const TableRow = styled.td`
    border: 1px solid #333;
    padding : 10px;
    border-collapse: collapse;
`

export const OptionQuizz = styled.option`
    padding:8px;
`

export const QuizzLabel = styled.label`
    color: white;
    font-size:22px;
`

export const QuizzSelect = styled.select`
    padding:8px;
    width : 100%;
    margin-bottom : 16px;
    border-radius : 12px;
    font-size:22px;
`