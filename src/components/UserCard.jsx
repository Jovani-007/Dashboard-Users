import './UserCard.css';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
    const navigate = useNavigate();

    return (
        <div className='user-card' onClick={() => navigate(`/user/${user.id}`)}>
            <img src={user.avatar} alt={`${user.firstName} avatar`} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
            <small>{user.address}</small>
        </div>
    );
}

export default UserCard;
