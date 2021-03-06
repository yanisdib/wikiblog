import React, { useState } from 'react';
import FeaturedArticlesCategoriesList from './FeaturedArticlesCategoriesList';
import FeaturedArticlesList from './FeaturedArticlesList/FeaturedArticlesList';

function FeaturedArticles(props) {
    const rowStyle = {
        margin: "auto"
    }
    const [selectedCategory, setSelectedCategory] = useState('Tout');
    const categoryOptions = ['Analyse', 'Chronique', 'Interview', 'Actualité'];
    let categories = props.articles.filter(article => categoryOptions.includes(article.category))
        .map(article => {
            return article.category
        });


    /** Set a an array of unique values from the array categories */
    let uniqueCategories = [...new Set(categories)];
    const onCategoryClick = (e) => {
        let category = e.target.innerText;
        setSelectedCategory(category);
    };
    return (
        <div className="container d-flex p-0 mb-5">
            <div className="featured-articles w-100 d-flex">
                <div className="row h-100 w-100" style={rowStyle}>
                    <div className="col-12">
                        <FeaturedArticlesCategoriesList currentCategory={selectedCategory} categories={uniqueCategories} onClick={onCategoryClick} />
                        <FeaturedArticlesList category={selectedCategory} articles={props.articles} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArticles;