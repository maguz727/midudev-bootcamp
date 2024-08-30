// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// función contador
/* const Counter = () => {
  const [count, setCount] = useState(0)
  return <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div> 
} */

const Title = () => {
  return (
    <>
      <h1>Bootcamp Javascript</h1>
      <h2>Midudev</h2>
    </>
  )
}

const Description = () => {
  return (
    <p className="read-the-docs">
      Bootcamp FullStack de Javascript basado en curso de <a href="https://fullstackopen.com/es">FullStackOpen</a>
    </p>
)}

const Hello = (props) => {
  const { friends } = props
  // console.log(friends)
  // Asegúrate de que friend tenga elementos antes de acceder
  if (!friends || friends.length === 0) {
    return <h2>No hay amigos disponibles.</h2>;
  }
  return (
    <>
      <p>Bienvenido {friends[0].name} {friends[0].lastName}</p>
      <p>Bienvenido {friends[1].name} {friends[1].lastName}</p>
    </>
  )
}






const App = () => {
  const friends = [
    {name: 'Manuel', lastName: 'Guzman', age: 36},
    {name: 'Paula', lastName: 'Arenas', age: 33}
  ]
  return (
    <>
      
      <Title />
      <Description />
      <Hello friends={friends}/>

    </>
  )
}

export default App
