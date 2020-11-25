import React from 'react';
import ReactDOM from 'react-dom';

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

    // have to define render
    render() {
        if (!this.state.errMsg && !this.state.lat) {
            return (<div>Loading</div>)
        } 
        else if (this.state.lat && !this.state.errMsg) {
            return (<div>Lat: {this.state.lat}</div>)
        }
        else if (!this.state.lat && this.state.errMsg) {
            return (<div>Error: {this.state.errMsg}</div>)
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));