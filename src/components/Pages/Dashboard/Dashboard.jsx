import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h3>Dashboard</h3>
            <Link to="/dashboard/articles">Articles</Link>
        </div>
    );
};

export default Dashboard;