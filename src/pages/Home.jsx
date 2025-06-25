import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import "../App.css";

const USERS_PER_PAGE = 6;

function Home() {   
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
    fetch("http://localhost:3001/peoples")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error("Erro ao buscar usuários:", err));
}, []);

const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
const start = (currentPage - 1) * USERS_PER_PAGE;
const paginatedUsers = users.slice(start, start + USERS_PER_PAGE);

return (
    <div className="App">
        <h1 className="title">DASHBOARD DE USUÁRIOS</h1>
        <p className="title">Total de usuários: {users.length}</p>

        <div className="user-container">
            {paginatedUsers.map(user => (
            <UserCard key={user.id} user={user} />
            ))}
            {paginatedUsers.length === 0 && <p>Nenhum usuário encontrado.</p>}
        </div>

        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
    </div>
    );
}

export default Home;
