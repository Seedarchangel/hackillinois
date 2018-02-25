import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.js';

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.

class App extends Component {
  render() {
    return (
        <Home />
        //<div> hi </div>
        // Define your router and replace <Home /> with it!
    );
  }
}

export default App;
