import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history';
import moment from 'moment';
import { startRemoveArticle } from '../../../../actions/articles';

export class ArticlesListItems extends React.Component {
    onClick = (e) => {
        e.preventDefault()
        const history = createHistory();
        this.props.startRemoveArticle({ id: this.props.id });
        history.push('/dashboard/articles');
    };
    render() {
        const { id, title, subtitle, category, permalink, createdAt } = this.props;
        return (
            <div className="row w-100 p-3">
                <div className="col-4">
                    <Link to={`/dashboard/articles/edit/${id}`}>
                        <h6>{title}</h6>
                        <h6>{subtitle}</h6>
                    </Link>
                    <Link to={`/dashboard/articles/edit/${id}`}> Edit </Link>
                    <Link onClick={this.onClick}> Remove </Link>
                    <a target="_blank" rel="noopener noreferrer" href={`/view/${permalink}`}> View </a>
                </div>
                <div className="col-2">
                    <small>Yanis Dib</small>
                </div>
                <div className="col-2">
                    <p>{category}</p>
                </div>
                <div className="col-2">No comments</div>
                <div className="col-2">
                    <small>
                        {moment(createdAt).format('DD/MM/YYYY')}
                    </small>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveArticle: (article) => dispatch(startRemoveArticle(article))
});

export default connect(undefined, mapDispatchToProps)(ArticlesListItems);