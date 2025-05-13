import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/people")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, []);

  return (
    <div className="App">
      <h1>Dashboard de Usuários</h1>
      <p>Total de usuários: {users.length}</p>
      <div className="user-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        {users.length === 0 && <p>Nenhum usuário encontrado.</p>}
      </div>
    </div>
  );
}

export default App;