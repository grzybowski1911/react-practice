import './SeasonDisplay.css';
import React from 'react'; 


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat < 0 ? 'summer' : 'winter';
    } else {
        return lat >  0 ? 'winter' : 'summer'
    }
}

const seasonConfig = {
    summer: {
        text: 'it hot',
        iconName: 'massive sun'
    },
    winter: {
        text: 'weather go brr',
        iconName: 'massive snowflake'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season ${iconName}-weather`}>
            <i className={`icon-left ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;