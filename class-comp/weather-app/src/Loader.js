import React from 'react';  

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui huge text loader">{props.message}</div>
        </div>
    );
};

Loader.defaultProps = {
    message: 'Hurry Up and Wait'
};

export default Loader;