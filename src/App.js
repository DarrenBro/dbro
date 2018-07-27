import React, { Component } from 'react';
import HomePageContainer from './Containers/HomePageContainer';
import HomePageComponent from "./Components/HomePageComponent";

class App extends Component {

  render() {
    return (
      <div>
        {/* <AppRouter /> */}
        <HomePageComponent />
      </div>
    );
  }
}

export default App;

