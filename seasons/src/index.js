import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
  /* Initializing state through constructors */
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: ''};    
  // }  
  state = { lat: null, errorMessage: '' };

  // 處理非同步行為
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // setState 更新資料
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  // 有條件判斷式時，用 function render
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }  
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat} />;
    }
    // Loading 組件
    return <Spinner message='Please accept location request' />  
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));