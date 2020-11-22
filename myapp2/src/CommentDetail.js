import React from 'react';


const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a className="avatar" href="/">
            <img alt="look at this photograph" src={props.image}/>
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                <div className="date">{props.time}</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    {props.stars} Faves
                    </div>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default CommentDetail;