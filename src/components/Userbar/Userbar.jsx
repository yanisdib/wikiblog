import React from 'react';
import { Link } from 'react-router-dom';

function Userbar() {
    return (
        <div className="row userbar fixed-bottom justify-content-center m-4">
            <div className="col-auto h-100 userbar-items">
                <div className="row row h-100 align-items-center justify-content-center">
                    <div className="col-auto">
                        <Link to={`/login`}>
                            <svg
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 0 16 16"
                                className="bi bi-plus-square"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Userbar;