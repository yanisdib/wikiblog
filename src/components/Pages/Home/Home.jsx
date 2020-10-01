import React from 'react';
import { connect } from 'react-redux';
import FeaturedArticles from './FeaturedArticles/FeaturedArticles';
import FeaturedPodcasts from './FeaturedPodcasts/FeaturedPodcasts';
import getArticles from '../../../selectors/articles';
import FeaturedSong from './FeaturedSong/FeaturedSong';
import FeaturedArtbooks from './FeaturedArtbooks/FeaturedArtbooks';
import FeaturedSoundtracks from './FeaturedSoundtracks/FeaturedSoundtracks';

function Home(props) {
    return (
        <div>
            <FeaturedArticles articles={props.articles} />
            <FeaturedPodcasts articles={props.articles} />
            <div className="container">
                <div className="row sct-h">
                    <FeaturedSong />
                    <FeaturedArtbooks articles={props.articles} />
                </div>
            </div>
            <FeaturedSoundtracks articles={props.articles} />
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