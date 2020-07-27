import React from 'react';
import { connect } from 'react-redux';
import ArticlesComments from './ArticlesComments/ArticlesComments';
import getArticleComments from '../../selectors/comments';

export function ArticlesView(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.article.imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    console.log(props.comments);

    return (
        <section id="view">
            <div className="article-cover" style={backgroundStyle} />
            <div className="container mt-5 mb-5">
                <h1 className="fw-300">{props.article.title}</h1>
                <h1 className="fw-700">{props.article.subtitle}</h1>
                <div className="row">
                    <div className="col-3 author-margin">
                        <p className="author fw-500">
                            Published by <a href="#author">Yanis Dib</a>
                        </p>
                    </div>
                    <div className="col-7">
                        <p className='content'>{props.article.description}</p>
                    </div>
                </div>
                <h1 className="fw-700 mt-5">Commentaires</h1>
                <ArticlesComments history={props.history} idArticle={props.article.id} comments={props.comments} />
            </div>
        </section>
    );
};


const mapStatetoProps = (state, props) => {
    const article = state.articles.find((article) => article.permalink === props.match.params.id);
    return {
        article: article,
        comments: getArticleComments(state.comments)
    };
};

export default connect(mapStatetoProps)(ArticlesView);