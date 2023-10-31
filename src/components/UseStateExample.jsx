// Per poter utilizzare QUALSIASI hook è necessario ricordare le DUE regole degli hooks:

import { useState } from 'react'

// REGOLE DEGLI HOOKS:
// 1) i React Hooks si possono utilizzare SOLAMENTE in COMPONENTI REACT A FUNZIONE!
// 2) i React Hooks si possono dichiarare e utilizzare solamente IN CIMA al componente, prima del return statement,
// ma anche al di fuori di qualsiasi ciclo, if/else, funzione a parte, etc.

const UseStateExample = () => {
  // qui!
  // cosa fa useState? crea una singola variabile di stato.
  // questo componente avrà un contatore, che grazie a un bottone aumenta di uno ogni volta

  // se fossimo in una classe....
  //   state = {
  //     counter: 0
  //     showSection: false
  //   }

  //   this.setState({
  //     counter: counter + 1
  //   })

  //   const stefano = useState()
  //   stefano[0]
  //   stefano[1]

  const [counter, setCounter] = useState(0) // 1
  const [showSection, setShowSection] = useState(false) // 2

  //   const [obj, setObj] = useState({counter: 0, showSection: false})

  //   setObj({
  //     ...obj,
  //     counter: counter + 1
  //     // se non dichiaro qui dentro showSection, lo perdo!
  //   })

  return (
    <div>
      <h1>useState hook!</h1>
      <p>
        L'hook "useState" serve per introdurre in un componente a funzione il
        concetto di "state".
      </p>
      <p>Il valore corrente di counter è: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>
        <p>
          Il contenuto sottostante è{' '}
          <span onClick={() => setShowSection(true)}>segreto</span>! Comparirà
          solo se trovi il pulsante nascosto...
        </p>
        {showSection && (
          <p>
            <h2>SEZIONE SEGRETISSIMA!!</h2>
          </p>
        )}
      </div>
    </div>
  )
}

export default UseStateExample
