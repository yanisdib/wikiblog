import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedArticlesListItems({ index, title, subtitle, category, isFeatured, imageUrl, permalink }) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    function renderFeaturedArticle(index) {
        let offset = '';
        if (index > 1) {
            offset = 'offset-1-b'
        } else { offset = '' };
        if (isFeatured) {
            return (
                index === 0 ? (
                    <div className={`col-12 featured-articles-item-${index} h-100`} style={backgroundStyle}>
                        <p className="fw-500">{category}</p>
                        <Link to={`/view/${permalink}`}>
                            <h4 className="fw-400">{title}</h4>
                            <h3 className="fw-600">
                                {subtitle}
                            </h3>
                        </Link>
                    </div>
                ) : (
                        <div className={`col-4-b ${offset} featured-articles-item-${index} h-100`} style={backgroundStyle}>
                            <p className="fw-400">{category}</p>
                            <Link to={`/view/${permalink}`}>
                                <h6 className="fw-400">{title}</h6>
                            </Link>
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