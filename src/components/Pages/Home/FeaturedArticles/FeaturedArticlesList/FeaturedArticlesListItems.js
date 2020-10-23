import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedArticlesListItems({ index, currentCategory, title, subtitle, category, imageUrl, permalink, createdAt }) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    let color = () => {
        switch (category) {
            case 'Chronique':
                return '#e61e33';
            case 'Analyse':
                return '#4100f6'
            default: return '#000000';
        }
    }

    const badgeStyle = {
        backgroundColor: color()
    };

    function renderFeaturedArticle(index) {
        if (index < 3) {
            return (
                index === 0 ? (
                    <div className={`col-3 featured-articles-item-${index} h-75`} style={backgroundStyle}>
                        <div className="row h-100 align-items-end p-3">
                            <div className="col-12 featured-articles-info h-50 mb-3 p-4">
                                <span className="fw-400 cat-badge" style={badgeStyle}>{category}</span>
                                <Link to={`/view/${permalink}`}>
                                    <h6 className="fw-500">{title}</h6>
                                </Link>
                                <p className="fw-400 article-date">{moment(createdAt).format('MMMM Do YYYY')}</p>
                            </div>
                        </div>
                    </div>) :
                    (
                        <div className={`col-3 offset-1-c featured-articles-item-${index} h-75`} style={backgroundStyle}>
                            <div className="row h-100 align-items-end p-3">
                                <div className="col-12 featured-articles-info h-50 mb-3 p-4">
                                    <span className="fw-400 cat-badge" style={badgeStyle}>{category}</span>
                                    <Link to={`/view/${permalink}`}>
                                        <h6 className="fw-500">{title}</h6>
                                    </Link>
                                    <p className="fw-400 article-date">{moment(createdAt).format('MMMM Do YYYY')}</p>
                                </div>
                            </div>
                        </div>
                    )
            )
        }
        else {
            return (
                <div>No featured articles...</div>
            )
        };
    };

    return (
        renderFeaturedArticle(index)
    );

};

export default FeaturedArticlesListItems;