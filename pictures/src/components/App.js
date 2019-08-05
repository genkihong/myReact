import React from 'react';
import unsplash from '../api/unsplash';// 在 unsplash 建立 axios 實體 
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  };
  
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },      
    });
    // console.table(response.data.results);
    this.setState({ images: response.data.results });
  };

  onSearchClick= async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },      
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar
        handleSubmit={this.onSearchSubmit}
        handleClick={this.onSearchClick}
      />
      <ImageList images={this.state.images}/>
    </div>
    );
  }
}

export default App;
