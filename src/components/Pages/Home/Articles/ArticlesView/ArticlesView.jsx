import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function ArticlesView(props) {
    console.log(props);
    console.log(props.article);
    const backgroundStyle = {
        backgroundImage: `url(${props.article.imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <section id="view">
            <div className="article-cover" style={backgroundStyle} />
            <div className="container mt-5 mb-5">
                <h1 className="fw-300">{props.article.title}</h1>
                <h1 className="fw-700">{props.article.subtitle}</h1>
                <div className="row">
                    <div className="col-3 author-margin">
                        <p className="author fw-500">
                            Published by <Link>Yanis Dib</Link>
                        </p>
                    </div>
                    <div className="col-7">
                        <p className='content'>{props.article.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStatetoProps = (state, props) => {
    return {
        article: state.articles.find((article) => article.permalink === props.match.params.id)
    };
};

export default connect(mapStatetoProps)(ArticlesView);