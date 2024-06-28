import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Log = () => {
    const [requests, setRequests] = useState([]);
    const [type, setType] = useState('donor'); // Default to 'donor'

    useEffect(() => {
        fetchRequests();
    }, [type]); // Add 'type' as a dependency

    const fetchRequests = async () => {
        let endpoint;
        switch (type) {
            case 'donor':
                endpoint = 'http://localhost:9000/api/completed';
                break;
            case 'receiver':
                endpoint = 'http://localhost:9000/api/fulfilled';
                break;
            case 'volunteer':
                endpoint = 'http://localhost:9000/api/accepted';
                break;
            default:
                endpoint = 'http://localhost:9000/api/completed';
                break;
        }

        try {
            const response = await axios.get(endpoint);
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    const logHistory = () => {
        console.log('History of requests:', requests);
    };

    return (
        <div>
            <button onClick={logHistory}>Log History</button>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="donor">Donor</option>
                <option value="receiver">Receiver</option>
                <option value="volunteer">Volunteer</option>
            </select>

            <ul>
                {requests.map((request) => (
                    <li key={request._id}>
                        {request.donarName || request.receiverName || request.volunteerId}: {request.loc}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Log;
