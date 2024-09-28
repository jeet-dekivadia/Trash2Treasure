import React, { useState } from 'react';
import axios from 'axios';

function Camera() {
    const [item, setItem] = useState('');
    const [message, setMessage] = useState('');

    const handleScan = async () => {
        try {
            const response = await axios.post('/api/recycle', { userId: '123', item });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error recycling item');
        }
    };

    return (
        <div>
            <h1>Camera View</h1>
            <input 
                type="text" 
                value={item} 
                onChange={e => setItem(e.target.value)} 
                placeholder="Scan or enter item" 
            />
            <button onClick={handleScan}>Recycle Item</button>
            <p>{message}</p>
        </div>
    );
}

export default Camera;
