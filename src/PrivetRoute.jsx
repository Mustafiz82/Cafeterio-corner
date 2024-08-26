import React, { useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user?.email) {
            navigate('/login'); // Redirect to login if not logged in and not loading
        }
    }, [loading, user, navigate]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <p className='text-white'>Loading...</p>
            </div>
        );
    }

    if (user?.email) {
        return children; // Render the protected component if logged in
    }

    return null; // Return nothing while redirecting to prevent flicker
};

export default PrivetRoute;
