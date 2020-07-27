import React from 'react';
import { connect } from 'react-redux';
import FeaturedArticles from './FeaturedArticles/FeaturedArticles';
import FeaturedPodcasts from './FeaturedPodcasts/FeaturedPodcasts';
import FeaturedAnalysis from './FeaturedAnalysis/FeaturedAnalysis';
import getArticles from '../../../selectors/articles';

function Home(props) {
    console.log(props.articles);
    return (
        <div className="container mt-3 mb-3">
            <FeaturedPodcasts articles={props.articles} />
            <FeaturedArticles articles={props.articles} />
            <FeaturedAnalysis articles={props.articles} />
            {/* Other sections here */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.articles)
    };
};

export default connect(mapStateToProps)(Home);