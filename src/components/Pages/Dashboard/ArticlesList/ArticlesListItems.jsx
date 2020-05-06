import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { removeArticle } from '../../../../actions/articles';

function ArticlesListItems({ id, title, subtitle, description, createdAt, dispatch }) {
    return (
        <div className="list-group">
            <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 alt-title">{title}</h5>
                    <h6 className="mb-1">{subtitle}</h6>
                    <small>{moment(createdAt).format('DD/MM/YYYY')}</small>
                    <Link to={`/dashboard/articles/edit/${id}`}>Edit</Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => { dispatch(removeArticle({ id })) }}
                    >
                        Remove
                    </button>
                </div>
                <p className="mb-1 content">{description}</p>
                <small>Author not displayed yet.</small>
            </div>
        </div>
    );
};

export default connect()(ArticlesListItems);