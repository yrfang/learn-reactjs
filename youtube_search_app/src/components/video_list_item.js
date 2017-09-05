import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //one way of props variable and get the property of props form App component (that's mean... you don't declare variable again!)
  // const video = props.video;

  //current way is a little brief ES6 syntax to declare the variable with the same name of props from App componet (actaully they are objects)
  // console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
