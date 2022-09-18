import React from 'react';
import bgVideoMOV from './../video_bg/match-video.mov';
import bgVideoWEBM from './../video_bg/match-video.webm';
import bgVideoWEBMMobile from './../video_bg/match-video-mobile.webm';

const BackgroundVideo = () => {
  return (
    <>
      <video
        className="background-video background-video--bottom background-video--desktop"
        width="100%"
        height="100%"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={bgVideoMOV} type='video/mp4; codecs="hvc1"' />
        <source src={bgVideoWEBM} type="video/webm" />
      </video>
      <video
        className="background-video background-video--bottom background-video--mobile"
        width="100%"
        height="100%"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={bgVideoWEBMMobile} type="video/webm" />
      </video>
    </>
  );
};

export default BackgroundVideo;
