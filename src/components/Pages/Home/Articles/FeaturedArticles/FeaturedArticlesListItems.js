import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function FeaturedArticlesListItems({ id, title, subtitle, description, createdAt }) {
    let url = title.concat('-', subtitle);
    url = url.replace(/\s+/g, '-').toLowerCase();
    return (
        <div>
            <Link to={`/${url}${id.substring(0,5)}`}><h3>{title}</h3></Link>
            <h4>{subtitle}</h4>
            <p>{`${description.substring(0, 255)}...`}</p>
            <small>Published on {moment(createdAt).format('DD/MM/YYYY')} by Yanis</small>
        </div>
    );
};

export default FeaturedArticlesListItems;