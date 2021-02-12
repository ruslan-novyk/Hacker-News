import React from 'react';
import loading from '../assets/loading.gif'; // Tell webpack this JS file uses this image

const Loading: React.FC = () => {
    return (
        <div className="loading-block">
            <img src={loading} />
        </div>
    );
};

export default Loading;
