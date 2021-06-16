import React, { createContext, useState, useRef, useEffect } from "react";
import Peer from "simple-peer";
import { io } from "socket.io-client";

const socketContext = createContext();

const socket = io("http://localhost:5000");

const ContextProvider = ({ children }) => {
    const [stream, setstream] = useState(null);
    const [me, setMe] = useState(null);
    const [call, setCall] = useState({});
    const [callaccepted, setCallAccepted] = useState(false);
    const [callended, setCallEnded] = useState(false);
    const [name, setName] = useState("");

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                setstream(stream);
                myVideo.current.srcObject = stream;
            });

        socket.on("me", (id) => {
            setMe(id);
        });

        socket.on("calluser", ({ from, name: callerName, signal }) => {
            setCall({ isRecievedCall: true, from, name: callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on("signal", (data) => {
            socket.emit("answercall", { signal: data, to: call.from });
        });

        peer.on("stream", (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });
        peer.on("signal", (data) => {
            socket.emit("calluser", { userRoCall: id, signalData: data, from: me, name });
        });

        peer.on("stream", (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });
      
        socket.on("callaccepted", (signal) => {
            setCallAccepted(true)
          
            peer.signal(signal)

        })
      
        connectionRef.current = peer
    };
    
    const endCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy();
        window.location.reload()
    };

    return <socketContext.Provider value={{call, callaccepted, myVideo, userVideo, stream, me, name, setName, callended, callUser, endCall, answerCall}}>
        {children}
    </socketContext.Provider>
};


export {ContextProvider,socketContext}