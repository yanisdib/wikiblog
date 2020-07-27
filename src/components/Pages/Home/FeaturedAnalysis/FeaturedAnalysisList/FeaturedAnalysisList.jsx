import React from 'react';
import FeaturedAnalysisItems from './FeaturedAnalysisItems';

function FeaturedAnalysisList({ articles }) {
    const featuredAnalysis = articles.filter(article => article.category === "Analyse" && article.isFeatured);
    return (
        <div className="featured-analysis mt-5 mb-5" >
            {
                featuredAnalysis.length > 0 ? (
                    <div className="row h-100">
                        {featuredAnalysis.map((featuredAnalysisItem, i) => {
                            return i < 3 ? (
                                <FeaturedAnalysisItems key={featuredAnalysisItem.id} {...featuredAnalysisItem} i={i} />
                            ) : (null)
                        }
                        )}
                    </div>
                ) : (<div></div>)
            }
        </div>
    );
};

export default FeaturedAnalysisList;