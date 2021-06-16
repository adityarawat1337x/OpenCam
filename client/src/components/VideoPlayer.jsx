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

const Video = styled.video`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 2px white solid;
  fir-content:cover;
  overflow: hidden;
  border-radius:50%;
`;

const VideoPlayer = () => {
  const { call, callaccepted, myVideo, userVideo, stream, name, callended } =
    useContext(socketContext);

  return (
    <Player>
      {stream && (
        <Video playsInline muted ref={myVideo} autoPlay>
          {name || "Aditya"}
        </Video>
      )}
      {callaccepted && !callended && (
        <Video playsInline ref={userVideo} autoPlay>
          {call.name || "Anonymous"}
        </Video>
      )}
    </Player>
  );
};

export default VideoPlayer;
