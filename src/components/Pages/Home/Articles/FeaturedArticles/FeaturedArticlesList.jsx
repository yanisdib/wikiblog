import React from 'react';
import FeaturedArticlesListItems from './FeaturedArticlesListItems';
import getArticles from '../../../../../selectors/articles';
import { connect } from 'react-redux';

export function FeaturedArticlesList(props) {
    return (
        <div>
            {
                props.articles.length > 0 ? (
                    props.articles.map((article) => {
                        return <FeaturedArticlesListItems key={article.id} {...article} />
                    })
                ) : (<p>No articles...</p>)}

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.articles)
    };
};

export default connect(mapStateToProps)(FeaturedArticlesList);