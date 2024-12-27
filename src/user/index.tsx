import { useState } from 'react'

export function User() {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder='Digite seu nome'
                onChange={ (e) => setName(e.target.value) }
            />

            <button onClick={ () => setUser(name) }>Cadastrar</button>

            <br />

            { user !== "" && <strong>Usuário online: {user}</strong> }

        </div>
    )
}