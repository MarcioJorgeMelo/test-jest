import './App.css'
import { useState } from 'react'
import { Button } from './button'
import { User } from './user'
import { Form } from './form'
import { Posts } from './posts'

function App() {
  const [message, setMessage] = useState("Bem vindo ao projeto")

  return (
    <div>
      <h1 className='titulo' data-testid="header">Sujeito programador</h1>
      <span>Sujeito programador</span>
      <p>{message}</p>

      <h1>Sujeito programador</h1>

      <button onClick={ () => setMessage("Estudando teste com reactJS") }>
        Alterar mensagem
      </button>

      <hr />
      <br />

      <Button onClick={ () => alert("Clicou") } disabled={true}>
        Clique aqui
      </Button>

      <br />
      <hr />
      <br />
      
      <User />

      <br />
      <hr />
      <br />

      <Form />

      <br /><br />

      <Posts />

    </div>
  )
}

export default App
