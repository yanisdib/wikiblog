import React from 'react';
import FooterTags from './FooterTags/FooterTags';
import FooterCategories from './FooterCategories/FooterCategories';

function Footer() {
    return (
        <div className="container">
            <footer className="row d-flex mt-5 pt-5 pb-5">
                <div className="col-12 h-100">
                    <div className="row h-50">
                        <div className="col-3 footer-tags">
                            <h6>Tags</h6>
                            <FooterTags />
                        </div>
                        <div className="col-3 footer-categories">
                            <h6>Categories</h6>
                            <FooterCategories />
                        </div>
                        <div className="col-6 footer-articles">
                            <h6>Publications</h6>
                        </div>
                    </div>
                    <div className="row h-50">
                        <div className="col-3 footer-about">
                            <h6>About</h6>
                        </div>
                        <div className="col-3 footer-site">
                            <h6>Site</h6>
                        </div>
                        <div className="col-3 footer-joinus">
                            <h6>Join us</h6>
                        </div>
                        <div className="col-3 footer-legal-rights">
                            <h6>Legal rights</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;