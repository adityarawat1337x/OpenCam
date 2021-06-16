import React, { useContext } from "react";
import styled from "styled-components";

import { socketContext } from "../SocketContext";

const Player = styled.div`
  width: 80vw;
  height: 80vh;
  border: 2px white solid;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 2px white solid;
  fir-content: cover;
  overflow: hidden;
  border-radius:50%;
`;

const VideoPlayer = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(socketContext);

  return (
    <Player>
      {stream && (
        <Video>
          <h1>{name || "Aditya"}</h1>
          <video playsInline ref={myVideo} autoPlay />
        </Video>
      )}
      {callAccepted && !callEnded && (
        <Video>
          <h1>{call.name || "Anonymous"}</h1>
          <video playsInline ref={userVideo} autoPlay />
        </Video>
      )}
    </Player>
  );
};

export default VideoPlayer;
