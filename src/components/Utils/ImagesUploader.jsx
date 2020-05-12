import React from 'react';

class ImagesUploader extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    {
                        this.props.uploadStatus === "Uploading" ?
                            (
                                <div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <img src={`${this.props.imageUrl}`} className="w-50" alt="" />
                            )
                    }
                    <br />
                    <input type="file" onChange={this.props.onChange} />
                </div>
                <div className="form-group">
                    <button>Upload</button>
                </div>
            </form>
        );
    };
};

export default ImagesUploader;