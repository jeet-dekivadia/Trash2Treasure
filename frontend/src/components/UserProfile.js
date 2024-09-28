import React, { useState } from 'react';

function UserProfile() {
    const [username, setUsername] = useState('User123');
    const [recycledCount, setRecycledCount] = useState(10);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
            <p>Recycled Items Count: {recycledCount}</p>
            <button onClick={() => alert('Profile updated!')}>Update Profile</button>
        </div>
    );
}

export default UserProfile;
