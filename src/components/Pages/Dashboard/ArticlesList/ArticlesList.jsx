import React from 'react';
import { Link } from 'react-router-dom';
import ArticlesListItems from './ArticlesListItems';
import getArticles from '../../../../selectors/articles';
import { connect } from 'react-redux';

export function ArticlesList(props) {
    return (
        <section id="d-articles-list">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-1">
                        <h4 className="fw-500">Articles</h4>
                    </div>
                    <div className="col-2">
                        <Link to="/dashboard/articles/create">Add an article</Link>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-2">
                        <select>
                            <option value="">Filter</option>
                            <option>Chronique</option>
                            <option>Review</option>
                            <option>Analyse</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select>
                            <option value="">Sort by</option>
                            <option>Date</option>
                            <option>Comments</option>
                            <option>Author</option>
                        </select>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-4">Title</div>
                    <div className="col-2">Author</div>
                    <div className="col-2">Category</div>
                    <div className="col-2">Comments</div>
                    <div className="col-2">Date</div>
                    {console.log(props.articles, props.articles.length)}
                    {
                        props.articles.length > 0 ? (
                            props.articles.map((article) => {
                                return <ArticlesListItems key={article.id} {...article} />
                            })
                        ) : (<p>No articles...</p>)
                    }
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.articles)
    };
};

export default connect(mapStateToProps)(ArticlesList);