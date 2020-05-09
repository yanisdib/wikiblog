import React from 'react';
import moment from 'moment';
import { v1 as uuidv1 } from 'uuid';

export class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.article ? props.article.title : '',
            subtitle: props.article ? props.article.subtitle : '',
            description: props.article ? props.article.description : '',
            permalink: props.article ? props.article.permalink : '',
            createdAt: props.article ? moment(props.article.createdAt) : moment()
        };
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onSubtitleChange = (e) => {
        const subtitle = e.target.value;
        this.setState(() => ({ subtitle }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description) {
            this.setState(() => ({
                error: 'Please provide a title and a description.',
                status: ''
            }));
            console.log(this.state.error);
        } else {
            this.setState(({
                error: '',
                status: 'Article successfully published!'
            }));
            // Create a permalink based on article's title, subtitle and a uuid.
            const permalink = this.state.title.concat('-', this.state.subtitle, '-', uuidv1().substring(0,6));  
            this.props.onSubmit(
                {
                    title: this.state.title,
                    subtitle: this.state.subtitle,
                    description: this.state.description,
                    permalink: permalink.replace(/\s+/g, '-').toLowerCase(),
                    createdAt: this.state.createdAt.valueOf()
                });
            console.log('Submitted');
        };
    };

    render() {
        return (
            <div className="row w-100">
                <div className="col-6 m-auto">
                    {this.state.error && <p className="text-danger">{this.state.error}</p>}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="fw-500">Title: </label>
                            <input
                                type="text"
                                className="form-control"
                                name='title'
                                value={this.state.title}
                                placeholder="Title of your article"
                                onChange={this.onTitleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="fw-500">Subtitle: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="subtitle"
                                value={this.state.subtitle}
                                placeholder="Subtitle of your article"
                                onChange={this.onSubtitleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="fw-500" htmlFor="">Description: </label>
                            <textarea
                                className="form-control"
                                placeholder="Type your content here..."
                                name="description"
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Publish</button>
                            <br />
                            {this.state.status && <p>{this.state.status}</p>}
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default ArticleForm;


