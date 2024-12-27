import axios from "axios";
import { useEffect, useState } from "react";

interface UsersProps {
    id: number;
    name: string;
    email: string;
    username: string;
}

export function Posts() {
    const [users, setUsers] = useState<UsersProps[]>([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");

            setUsers(response.data);
        }

        loadUsers()
    }, [])

    async function handleGetUsers() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        setUsers(response.data);
    }

    return (
        <div>
            <button onClick={handleGetUsers}>Buscar usuários</button>

            {users.map( (user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <strong>{user.username}</strong>
                    <br />
                </div>
            ) )}
        </div>
    )
}