import React from "react";
import ReactPlayer from "react-player";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        {videoId && (
          <ReactPlayer
            url={`https://vidsrc.to/embed/movie?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            playing={show} // Auto-play video when popup is visible
          />
        )}
      </div>
    </div>
  );
};

export default VideoPopup;
