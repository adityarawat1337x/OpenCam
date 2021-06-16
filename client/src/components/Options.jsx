import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { socketContext } from "../SocketContext";

const Container = styled.div``;

const Form = styled.form``;

const Options = ({ children }) => {
  const { me, setName, name, callaccepted, endcall, callUser, callended } =
    useContext(socketContext);
  const [idToCall, setidToCall] = useState("");

  return (
    <Container>
      <Form className="root" noValidate autoComplete="off">
        <h2>Account Info</h2>
        <input
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CopyToClipboard text={me} className="margin">
          <button>Copy Your Id</button>
        </CopyToClipboard>
      </Form>
      <Form className="root" noValidate autoComplete="off">
        <h2>Make a Call </h2>
        <input label="ID to call" />
        {callaccepted && !callended ? (
          <button onClick={endcall}>Hang Up</button>
        ) : (
          <button onClick={() => callUser(idToCall)}>Call</button>
        )}
          </Form>
          {children}
    </Container>
  );
};

export default Options;
