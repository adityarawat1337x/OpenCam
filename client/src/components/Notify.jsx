import React, { useContext } from "react";
import styled from "styled-components";
import { socketContext } from "../SocketContext";

const Modal = styled.div`
  position:absolute;
  top:10%;
  left:50%;
  transform:translate(-50%,0);
  z-index:1;
`

const Notify = () => {
  const { answerCall, call, callAccepted } = useContext(socketContext);

  return (
    <>
      {call.isRecievedCall && !callAccepted && (
        <Modal>
          <h1 style={{ marginBottom: "5px" }}>{call.name || "Anonymous"} is calling..</h1>
          <button
            style={{
              color: "black",
              border: "none",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgb(104, 255, 58)",
            }}
            onClick={answerCall}
          >
            📞
          </button>
          <button
            style={{
              color: "black",
              border: "none",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgb(255, 58, 58)",
              marginLeft: "20px"
            }}
          >
            ✖️
          </button>
        </Modal>
      )}
    </>
  );
};

export default Notify;
