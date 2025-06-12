import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const porPagina = 5;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/peoples")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, []);

  return (
    <div className="App">
      <h1 className='title'>Dashboard de Usuários</h1>
      <p className="title">Total de usuários: {users.length}</p>
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