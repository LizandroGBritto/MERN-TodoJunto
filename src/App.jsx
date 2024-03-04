import './App.css'
import Personas from './components/Personas'

const App = () => {
  return (
    <>
      <Personas firstName = "Jane" lastName = "Doe" age={45} hairColor = "Black" />
      <Personas firstName = "Jhon" lastName = "Smith" age={88} hairColor = "Brown" />
      <Personas firstName = "Millard" lastName = "Fillmore" age={50} hairColor = "Brown" />
      <Personas firstName = "Maria" lastName = "Smith" age={62} hairColor = "Brown" />
    </>
  )
}

export default App