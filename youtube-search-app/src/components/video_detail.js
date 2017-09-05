import React from 'react';

const VideoDetail = ({video}) => {
  const videioId = video.id.videioId;
  const url = `https://www.youtube.com/embed/${videioId}`; //in ES6
  // const url = 'https://www.youtube.com/embed' + videioId;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}/>
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
