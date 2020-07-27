import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedArticlesListItems({ i, title, subtitle, category, isFeatured, imageUrl, permalink }) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    function renderFeaturedArticle(i) {
        if (isFeatured && category!=='Podcast') {
            switch (i) {
                case 0:
                    return (
                        <div
                            className={`row h-100 featured-article-item-${i} ml-1`}
                            style={backgroundStyle}
                        >
                            <div className="col-12 h-100">
                                <p className="fw-500">Chronique</p>
                                <Link to={`/view/${permalink}`}>
                                    <h4 className="fw-400">{title}</h4>
                                    <h3 className="fw-600">
                                        {subtitle}
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    );
                case 1:
                    return (
                        <div className="row h-50 mb-2 pb-2">
                            <div className="col-12 d-flex align-items-end" style={backgroundStyle}>
                                <div className="row h-50">
                                    <div className="col-1"></div>
                                    <div className={`featured-article-item-${i} col-11`}>
                                        <p className="fw-500">{category}</p>
                                        <Link to={`/view/${permalink}`}>
                                            <h6 className="fw-400">{title}</h6>
                                            <h5 className="fw-600">{subtitle}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                case 2:
                    return (
                        <div className="row h-50 mt-2 pb-2">
                            <div className="col-12 d-flex align-items-end" style={backgroundStyle}>
                                <div className="row h-50">
                                    <div className="col-1"></div>
                                    <div className={`featured-article-item-${i} col-11`}>
                                        <p className="fw-500">{category}</p>
                                        <Link to={`/view/${permalink}`}>
                                            <h6 className="fw-400">{title}</h6>
                                            <h5 className="fw-600">{subtitle}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                default: return (null);
            };
        } else { return null; }
    };
    return (
        renderFeaturedArticle(i)
    );

};

export default FeaturedArticlesListItems;