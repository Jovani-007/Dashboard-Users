import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './UserDetails.css';

function UserDetails() {
const { id } = useParams();
const navigate = useNavigate();
const [user, setUser] = useState(null);

useEffect(() => {
    fetch(`http://localhost:3001/peoples/${id}`)
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.error("Erro ao carregar detalhes:", err));
}, [id]);

if (!user) return <p>Carregando...</p>;

return (
    <div className="details-container">
        <img src={user.avatar} alt="avatar" />
        <h2>{user.firstName} {user.lastName}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Endereço:</strong> {user.address}</p>
        <button onClick={() => navigate(-1)}>← Voltar</button>
    </div>
);
}

export default UserDetails;
