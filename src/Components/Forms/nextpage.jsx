import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
    const location = useLocation();
    const { welcomeMessage } = location.state || {};

    return (
        <div>
            {welcomeMessage && <p>{welcomeMessage}</p>}
            {/* Other content of the next page */}
        </div>
    );
};

export default NextPage;
