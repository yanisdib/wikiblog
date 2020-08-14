import React from 'react';
import moment from 'moment';
import { storage } from '../../../../../firebase/firebase';
import ImagesUploader from '../../../../ImagesUploader/ImagesUploader';
import PropTypes from 'prop-types';

export class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.article ? props.article.id : '',
            title: props.article ? props.article.title : '',
            subtitle: props.article ? props.article.subtitle : '',
            category: props.article ? props.article.category : 'Chronique',
            description: props.article ? props.article.description : '',
            imageFile: '',
            imageUrl: props.article ? props.article.imageUrl : '',
            isFeatured: props.article ? props.article.isFeatured : false,
            uploadStatus: '',
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

    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };

    onImageFileChange = (e) => {
        const imageFile = e.target.files[0];
        this.setState(() => ({ imageFile }));
    };

    onIsFeaturedChange = () => {
        this.setState(() => ({ isFeatured: !this.state.isFeatured }));
    };

    onFirebaseUpload = (e) => {
        e.preventDefault();
        console.log('start of upload');
        const imageFile = this.state.imageFile;
        // async code here
        if (imageFile === '') {
            console.error(`Not an image, file is a ${typeof (imageFile)}`)
        } else {
            this.setState(() => ({ uploadStatus: 'Uploading' }));
            const uploadTask = storage.ref(`/images/${imageFile.name}`).put(imageFile);

            uploadTask.on('state_changed',
                (snapShot) => {
                    console.log(snapShot);
                }, (err) => {
                    console.log(err);
                }, () => {
                    storage.ref('images').child(imageFile.name).getDownloadURL()
                        .then((firebaseUrl) => {
                            this.setState(() => ({
                                imageUrl: firebaseUrl,
                                uploadStatus: 'Done'
                            }));
                            console.log(this.state.uploadStatus);
                        });
                });
        };
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
            const spaceRegex = /\s+/g;
            const puncRegex = /[.,/#!$%^&*;:{}=_`~()@+?><[\]+]/g;
            const id = this.state.id;
            const permalink = this.state.title.concat('-', this.state.subtitle, '-', id.substring(id.length - 5));
            console.log(this.state.imageUrl);
            this.props.onSubmit(
                {
                    title: this.state.title,
                    subtitle: this.state.subtitle,
                    description: this.state.description,
                    category: this.state.category,
                    permalink: permalink.replace(spaceRegex, '-')
                        .replace(puncRegex, '')
                        .toLowerCase(),
                    imageUrl: this.state.imageUrl,
                    isFeatured: this.state.isFeatured,
                    createdAt: this.state.createdAt.valueOf()
                });
            console.log('Submitted');
            console.log(this.state.imageUrl)
        };
    };

    render() {
        console.log(this.state.isFeatured);
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
                        <div className="form-group">
                            <label>Category: </label>
                            <select
                                name="categories"
                                id="categories-select"
                                value={this.state.category}
                                onChange={this.onCategoryChange}
                                required={true}
                            >
                                <option value="Chronique">Chronique</option>
                                <option value="Analyse">Analyse</option>
                                <option value="Podcast">Podcast</option>
                                <option value="Wiki">Wiki</option>
                                <option value="News">Actualité</option>
                                <option value="Interview">Interview</option>
                            </select>
                            <div className="form-group">
                                <label>Publish as Featured Article: &nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.onIsFeaturedChange}
                                    checked={this.state.isFeatured}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Publish
                            </button>
                            <br />
                            {this.state.status && <p>{this.state.status}</p>}
                        </div>
                    </form>
                    <ImagesUploader
                        onChange={this.onImageFileChange}
                        onSubmit={this.onFirebaseUpload}
                        imageUrl={this.state.imageUrl}
                        uploadStatus={this.state.uploadStatus}
                    />
                </div>
            </div>
        );
    };
};

ArticleForm.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    imageFile: PropTypes.array,
    imageUrl: PropTypes.string,
    isFeatured: PropTypes.bool,
    uploadStatus: PropTypes.string,
    permalink: PropTypes.string,
    createdAt: PropTypes.number
};

export default ArticleForm;


