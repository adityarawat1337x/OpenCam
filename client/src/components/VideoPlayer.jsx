import React, { useContext } from "react";
import styled from "styled-components";

import { socketContext } from "../SocketContext";

const Frame = styled.div`
  width: 80vw;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {

  }
`;

const Client = styled.div`
  margin: 10px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  @media (max-width: 768px) {
    width: 80vw;
    height: 80vw;
    font-size: 12px;
  }
`;

const User = styled(Client)`
  width: 80vw;
  height: 80vw;
  @media (min-width: 768px) {
    position:absolute;
    top:100%;
    right:0%;
    transform:translate(0%,-140%);
    margin-right: 40px;
    width: 200px;
  height: 200px;
  max-width: 90%;
  max-height: 90%;
  }
`;


const Video = styled.video`
  overflow: hidden;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  @media (max-width: 768px) {
    position: relative;
    margin: auto;
  }
`;

const VideoPlayer = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(socketContext);

  return (
    <Frame>
      {stream && (
        <>
          <User>
            <Video playsInline ref={myVideo} muted autoPlay />
            <h1>{name || "Anonymous"}</h1>
          </User>
        </>
      )}
      {callAccepted && !callEnded && (
        <>
          <Client>
            <Video playsInline ref={userVideo} autoPlay />
            <h1>{call.name || "Anonymous"}</h1>
          </Client>
        </>
      )}
    </Frame>
  );
};

export default VideoPlayer;
