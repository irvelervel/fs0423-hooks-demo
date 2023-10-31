import './App.css'
import UseEffectExample from './components/UseEffectExample'
import UseStateExample from './components/UseStateExample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* qui monterò un componente a funzione */}
        {/* <UseStateExample /> */}
        <UseEffectExample />
      </header>
    </div>
  )
}

export default App
