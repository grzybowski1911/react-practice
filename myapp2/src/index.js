import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>Approve these things</ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Hank" time="10am" stars="2" image="https://source.unsplash.com/random" content="Runnin' through my weed, yeah"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Dale" time="11pm" stars="3" image="https://source.unsplash.com/erondu" content="I been tryna balance all this on my plate"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Bill" time="12pm" stars="4" image="https://source.unsplash.com/random" content="Rolling on the street like this gon' be what you want it to be like"/>
        </ApprovalCard>
    </div>
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'));