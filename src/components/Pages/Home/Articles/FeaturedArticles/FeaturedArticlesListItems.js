import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function FeaturedArticlesListItems({ title, subtitle, description, createdAt, permalink }) {
    return (
        <div>
            <Link to={`/view/${permalink}`}><h3>{title}</h3></Link>
            <h4>{subtitle}</h4>
            <p>{`${description.substring(0, 255)}...`}</p>
            <small>Published on {moment(createdAt).format('DD/MM/YYYY')} by Yanis</small>
        </div>
    );
};

export default FeaturedArticlesListItems;