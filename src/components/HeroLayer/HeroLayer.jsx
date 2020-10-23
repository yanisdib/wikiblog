import React from 'react';

function HeroLayer(props) {
    return (
        <div className="col-12 hero h-100">
            {props.children}
        </div>
    );
};

export default HeroLayer;