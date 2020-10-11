import React from 'react';

function FeaturedSong() {
    return (
        <div className="featured-sotw col-4-c h-100">
            <div className="row h-30 pl-4 pr-4 pt-5">
                <div className="col-12">
                    <h2 className="fw-500">Soundtrack of the Month</h2>
                </div>
            </div>
            <div className="row h-50">
                <div className="col-12 song-img">
                    <img src="/media/images/youtube_icon_64x64.png" alt="Watch the video" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedSong;