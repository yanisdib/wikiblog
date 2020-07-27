import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="container">
            <h2>Dashboard</h2>
            <Link to="/dashboard/articles">Articles</Link>
        </div>
    );
};

export default Dashboard;