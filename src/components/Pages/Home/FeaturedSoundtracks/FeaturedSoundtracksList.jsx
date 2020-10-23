import React from 'react';
import HeroLayer from '../../../HeroLayer/HeroLayer';

function FeaturedSoundtracksList(props) {
    /**  Get the 4 first articles from the soundtracks category */
    let featuredSoundtrack = props.featuredSoundtracks.slice(0, 4)
        .map(
            (featuredSoundtrack, i) => {
                const { title, imageUrl } = featuredSoundtrack;
                const backgroundStyle = {
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                };
                return (
                    i === 0 ? (
                        <div key={`ft-soundtrack-${i}`} className="col-2 featured-soundtracks-items h-70" style={backgroundStyle}>
                            <div className="row h-100">
                                <div className="col-12 hero-info h-100 p-0">
                                    <h6 className="fw-500 p-1 pt-4">
                                        {title}
                                    </h6>
                                </div>
                                <HeroLayer>
                                </HeroLayer>
                            </div>
                        </div>
                    ) : (
                            <div key={`ft-soundtrack-${i}`} className="col-2 featured-soundtracks-items offset-1-c h-70" style={backgroundStyle} >
                                <div className="row h-100">
                                    <div className="col-12 hero-info h-100 p-0">
                                        <h6 className="fw-500 p-1 pt-4">
                                            {title}
                                        </h6>
                                    </div>
                                    <HeroLayer>
                                    </HeroLayer>
                                </div>
                            </div>
                        )
                );
            }
        );
    return (
        <div className="row h-70 featured-soundtracks-list d-flex">
            {featuredSoundtrack.length > 0 ? (featuredSoundtrack) : ('No soundtrack reviewed yet...')}
        </div>
    );
};

export default FeaturedSoundtracksList;