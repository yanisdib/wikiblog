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
        const { id, title, subtitle, createdAt } = this.props;
        return (
            <div className="row d-flex w-100">
                <div className="col-3">
                    <Link to={`/dashboard/articles/edit/${id}`}>
                        <h6>{title}</h6>
                    </Link>
                    <h6>{subtitle}</h6>
                    <Link to={`/dashboard/articles/edit/${id}`}>Edit</Link>
                    <Link onClick={this.onClick}>Remove</Link>
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3">
                    <small>Published on {moment(createdAt).format('DD/MM/YYYY')}</small>
                    <br />
                    <small>Written by Yanis</small>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveArticle: (article) => dispatch(startRemoveArticle(article))
});

export default connect(undefined, mapDispatchToProps)(ArticlesListItems);