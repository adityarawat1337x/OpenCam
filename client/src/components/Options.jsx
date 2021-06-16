import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { socketContext } from "../SocketContext";

const Container = styled.div``;

const Form = styled.div``;

const Options = ({ children }) => {
  const { me, setName, name, callAccepted, endCall, callUser, callEnded } =
    useContext(socketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
      <Container>
      {children}
      <Form>
        <h2>Account Info</h2>
        <input
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {console.log(me)}
        <CopyToClipboard text={me}>
          <button>Copy Your Id</button>
        </CopyToClipboard>
      </Form>
      <Form>
        <h2>Make a Call </h2>
        <input
          label="ID to call"
          onChange={(e) => setIdToCall(e.target.value)}
        />
        {callAccepted && !callEnded ? (
          <button onClick={endCall}>Hang Up</button>
        ) : (
          <button onClick={() => callUser(idToCall)}>Call</button>
        )}
          </Form>
    </Container>
  );
};

export default Options;
