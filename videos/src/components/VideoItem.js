import './VideoItem.css';
import React from 'react';


const VideoItem = ({ video, onVideoSelect }) => {
// destructuring props: this.props.video, this.props.onVideoSelect

// const video = this.props.video
// const select = this.props.onVideoSelect;

  return (
    <div className="video-item item"
    onClick={onVideoSelect.bind(this, video)}>
    {/* onClick={() => onVideoSelect(video)}> 使用箭頭函式傳送參數 */}
      <img className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
