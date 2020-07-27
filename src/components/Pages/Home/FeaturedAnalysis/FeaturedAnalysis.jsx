import React from 'react';
import FeaturedAnalysisList from './FeaturedAnalysisList/FeaturedAnalysisList';

function FeaturedAnalysis(props) {
    return (
        <FeaturedAnalysisList articles={props.articles} />
    );
};

export default FeaturedAnalysis;