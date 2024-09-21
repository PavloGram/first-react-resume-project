import React, { useRef } from "react";
import collegeVideo from "../../images/college-video.mp4";

function VideoPlayer({ setPlay, play }) {
  const player = useRef(null);

  function closePlayer(e) {
    if (e.target === player.current) {
      setPlay(false);
    }
  }

  return (
    <div
      ref={player}
      className={`video-player ${!play && "hide"} `}
      onClick={closePlayer}
    >
      <video
        src={collegeVideo}
        autoPlay
        muted
        controls
        className="college-video"
      ></video>
    </div>
  );
}

export default VideoPlayer;
