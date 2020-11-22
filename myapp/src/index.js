// Import react and react dom libraries 

import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component 

const App =  () =>
{
    const buttonText = 'click here';
    const buttonStyle = {backgroundColor:'blue',color:'white'};
    return (
        <div>
            <label classNameName="label" htmlFor="name">Name</label>
            <input id="name" type="text" />
            <button style={buttonStyle}>{buttonText}</button>
        </div>
    );
}
// Take the react component and show on screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);