import React from 'react';
import FeaturedSoundtracksList from './FeaturedSoundtracksList';

function FeaturedSoundtracks({ articles }) {
    const featuredSoundtracks = articles.filter(article => article.category === 'Soundtracks' && article.isFeatured);
    return (
        <section id="featured-soundtracks" className="container">
            <div className="featured-soundtracks row h-100 d-flex">
                <div className="col-12">
                    <div className="row h-30 p-4 pt-5">
                        <div className="col-12">
                            <h2 className="fw-500">Original
                            <br />
                            Sountracks Reviews
                            </h2>
                            <h5 className="soundtracks-link">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-right-text mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                    <path fillRule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                 Donnez votre avis dès maintenant -></h5>
                        </div>
                    </div>
                    <FeaturedSoundtracksList featuredSoundtracks={featuredSoundtracks} />
                </div>
            </div>
        </section>
    );
};

export default FeaturedSoundtracks;