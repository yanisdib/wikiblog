import React from 'react';

function FeaturedArtbooks({ articles }) {
    const featuredArtbook = articles.filter(article => article.category === "Artbooks" && article.isFeatured)
        .slice(0, 1)
        .map((featuredArtbook, i) => {
            return (
                <div key={`artbook-${i}`} className='row h-60 mt-5 ml-4 mr-4'>
                    <div className='col-6 artbook-img d-flex h-100'>
                        <img src="/media/images/watch_icon_64x64.png" alt="Read this article" />
                    </div>
                    <div className='col-5 offset-1-c artbook-info h-100'>
                        <h3 className="fw-700">{featuredArtbook.title}</h3>
                        <p className="fw-100">
                            {featuredArtbook.description.substring(0, 255)}...
                    </p>
                    </div>
                </div>
            );
        });
    return (
        <div className="featured-artbooks col-7-b offset-1-c h-100">
            <h2 className="fw-500 pl-4 pr-4 pt-5">Artbooks reviews and showcases</h2>
            {featuredArtbook}
        </div>
    );
};

export default FeaturedArtbooks;