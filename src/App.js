import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'
import Button from '@restart/ui/esm/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 3
    }
  }
 
  nextPage = (prevState) => {
      this.setState({number: this.state.number + 3});
  }
 
  previousPage = (prevState) => {
    if (this.state.number > 3) {
      this.setState({number: this.state.number - 3});
    }
}

  render() {
    return (
      <Router>
        <Navbar />
        <Home perPage={this.state.number}/>
            <div class="btn-group d-flex mt-3 mb-3">
              <Button className='btn btn-secondary' onClick={this.previousPage}>Pagina precedenta</Button>
              <Button className='btn btn-success' onClick={this.nextPage}>Pagina urmatoare</Button>
            </div>
      </Router>
    );
  }
}

export default App;
