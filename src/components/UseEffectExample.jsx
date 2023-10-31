// questo esempio è per l'hook chiamato "useEffect"
// useEffect() è un rimpiazzo per i metodi di lifecycle componentDidMount e componentDidUpdate (a dire il vero
// rimpiazza anche un terzo metodo di lifecycle che non abbiamo visto, componentWillUnmount)

import { useEffect, useState } from 'react'

// REGOLE DEGLI HOOKS:
// 1) i React Hooks si possono utilizzare SOLAMENTE in COMPONENTI REACT A FUNZIONE!
// 2) i React Hooks si possono dichiarare e utilizzare solamente IN CIMA al componente, prima del return statement,
// ma anche al di fuori di qualsiasi ciclo, if/else, funzione a parte, etc.

const UseEffectExample = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Stefano')

  // qui!
  useEffect(() => {
    console.log(
      "sono in useEffect! io vengo lanciato all'avvio + ad ogni update"
    )
    // questo useEffect sta venendo lanciato al montaggio del componente,
    // ma viene anche rilanciato ogni volta che clicco il bottone.......
    // ...quindi ogni volta che cambia lo stato o cambiano le props!
    // setCounter(counter + 1) // <-- loop infinito! setto lo stato in un useEffect che viene rilanciato al cambio di stato!
  })
  // un useEffect senza secondo parametro è un misto tra un componentDidMount e un componentDidUpdate senza condizione
  // detto tra noi, poco utile...

  useEffect(() => {
    console.log(
      'useEffect! io invece vengo ri-eseguito solamente quando cambia counter'
    )
    // questo useEffect verrà lanciato solamente quando il valore di counter cambia
  }, [counter])
  // questo è un componentDidMount + componentDidUpdate con una condizione solo sul cambio di valore di counter

  useEffect(() => {
    console.log('io sono come un componentDidMount!')
  }, [])
  // se io metto come array di dipendenze un [], imposto ZERO CONDIZIONI per il ri-lancio dell'effect
  // questo è un equivalente a componentDidMount

  return (
    <div>
      <h1>Esempio di useEffect!</h1>
      <p>Il valore corrente di counter è: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h3 onClick={() => setName(name === 'Stefano' ? 'Cristina' : 'Stefano')}>
        {name}
      </h3>
    </div>
  )
}

export default UseEffectExample
