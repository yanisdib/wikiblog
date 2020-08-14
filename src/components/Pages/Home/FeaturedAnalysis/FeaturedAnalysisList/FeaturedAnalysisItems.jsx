import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedAnalysisItems({ category, title, subtitle, description, permalink, imageUrl, i }) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    switch (i) {
        case 2:
            return (
                <div className={`col-6 h-100 featured-analysis-item-${i} item-${i}`} style={backgroundStyle}>
                    <div className="row h-25 p-5">
                        <div className="col-12"><h5 className="">{`${title} ― ${subtitle}`}</h5></div>
                    </div>
                    <Link to={`/view/${permalink}`}>
                        <div className="row h-75 d-flex align-items-end justify-items-end">
                            <div className="col-3">
                            </div>
                            <div className="col-9 item-description p-4">
                                <h6>{category}</h6>
                                <p>{description.substring(0, 500)}...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        case 1:
            return (
                <div className={`col-3 h-100 featured-analysis-item-${i} item-${i}`} style={backgroundStyle}>
                    <Link to={`/view/${permalink}`}>
                        <div className="row h-100 d-flex flex-row-reverse align-items-end m-0">
                            <div className="col-1">
                            </div>
                            <div className="col-11 item-description h-item p-4">
                                <h6>{category}</h6>
                                <h6 className="fw-600">{`${title} ― ${subtitle}`}</h6>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        case 0:
            return (
                <div className={`col-3 h-100 featured-analysis-item-${i} item-${i}`} style={backgroundStyle}>
                    <Link to={`/view/${permalink}`}>
                        <div className="row h-100 d-flex align-items-end justify-items-end">
                            <div className="col-3">
                            </div>
                            <div className="col-9 h-75 item-description p-4">
                                <h6>{category}</h6>
                                <h6 className="fw-600">{`${title} ― ${subtitle}`}</h6>
                                <p>{description.substring(0, 200)}...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        default: return null;
    };
};

export default FeaturedAnalysisItems;