import React from 'react';

function FeaturedArticlesCategoriesList(props) {
    const categories = props.categories;
    let category = categories.map((category, i) => {
        let active = props.currentCategory === category ? ('active') : ('');
        return (
            <span key={`category-${i}`} className={`badge badge-pill badge-light fw-600 m-2 p-2 ${active}`} onClick={props.onClick}>{category}</span>
        );
    });

    let active = props.currentCategory === 'Tout' ? ('active') : ('');

    return (
        <div className="row m-0 h-25">
            <div className="col-12 p-5">
                <span key="all" className={`badge badge-pill badge-light fw-600 m-2 p-2 ${active}`} onClick={props.onClick}>Tout</span>
                {category}
            </div>
        </div>
    );
};

export default FeaturedArticlesCategoriesList;