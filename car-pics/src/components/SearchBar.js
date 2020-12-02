import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {

    state = {term: 'Die Young and Save Yourself'}

    onFormSubmit(e){
        e.preventDefault();
    }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e)=> this.setState({ term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;