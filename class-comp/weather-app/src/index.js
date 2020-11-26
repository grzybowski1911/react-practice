import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = { lat: null, errMsg:'' };
    //}

    //short hand state init
    state = {lat: null, errMsg:''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errMsg: err.message })
            
        );
        console.log('componenet mounted');
    }

    componentDidUpdate() {
        console.log('component updated');
    }

    renderContent() {
        if (!this.state.errMsg && !this.state.lat) {
            return (<Loader />)
        } 
        else if (this.state.lat && !this.state.errMsg) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        else if (!this.state.lat && this.state.errMsg) {
            return (<div>Error: {this.state.errMsg}</div>)
        }
    }

    // have to define render
    render() {
        return (
            <div className="red">
                {this.renderContent()}
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));