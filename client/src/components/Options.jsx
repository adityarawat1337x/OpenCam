import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { socketContext } from "../SocketContext";

const Container = styled.div`
  position:absolute;
  bottom:0%;
  width:100vw;
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
  :hover{
  }
  `;

const Form = styled.div`
  width:100%;
  `;

const Options = () => {
  const { me, setName, name, callAccepted, endCall, callUser, callEnded } =
    useContext(socketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <Container>
      <Form>
        <h2>Name</h2>
        <input
          style={{ border: "none", height: "30px", borderRadius: "20px", backgroundColor:"rgba(58, 160, 255,0.22)" }}
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CopyToClipboard text={me}>
          <button
            style={{
              color: "black",
              border: "none",
              width: "100px",
              height: "30px",
              borderRadius: "20px",
              backgroundColor: "rgb(58, 160, 255)",
            }}
          >
            Copy Your Id
          </button>
        </CopyToClipboard>
      </Form>
      <Form>
        <h2>Make a Call</h2>
        <input
          style={{ border: "none", height: "30px", borderRadius: "20px", backgroundColor: "rgba(58, 160, 255,0.22)" }}
          label="ID to call"
          onChange={(e) => setIdToCall(e.target.value)}
        />
        {callAccepted && !callEnded ? (
          <button
            style={{
              color: "black",
              border: "none",
              width: "100px",
              height: "30px",
              borderRadius: "20px",
              backgroundColor: "rgb(58, 160, 255)",
            }}
            onClick={endCall}
          >
            Hang Up
          </button>
        ) : (
          <button
            style={{
              color: "black",
              border: "none",
              width: "100px",
                height: "30px",
                borderRadius: "20px",
              backgroundColor: "rgb(58, 160, 255)",
            }}
            onClick={() => callUser(idToCall)}
          >
            Call
          </button>
        )}
      </Form>
    </Container>
  );
};

export default Options;
