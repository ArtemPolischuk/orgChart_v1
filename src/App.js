import React, { Component } from 'react';
import './App.css';

// Components
import OrgStructure from "./components/OrgStructure";

// Styles
import './components/OrgChart/index.css'
import 'react-orgchart/index.css';

class App extends Component {
    render () {
        return (
            <OrgStructure />
        )
    }
}

export default App;