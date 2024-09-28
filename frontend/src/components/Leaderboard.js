import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/leaderboard');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.username} - {user.recycledCount} items</li>
                ))}
            </ul>
        </div>
    );
}

export default Leaderboard;
