import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  // 預設搜尋影片
  componentDidMount() {
    this.FormSubmit('國光幫幫忙');
  };
  // 請求 youtube API
  FormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  // 選擇 Video
  VideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={searchBar}>
        <SearchBar onFormSubmit={this.FormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.VideoSelect}
              />
            </div>
            <div className="eleven wide column">
              <VideoDetail
                video={this.state.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const searchBar = {
  marginTop: '20px'
};

export default App;
