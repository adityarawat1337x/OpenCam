import React ,{useContext} from 'react'
import {socketContext } from '../SocketContext'

const Notify = () => {

    const {answerCall,call,callAccepted} = useContext(socketContext)
    
    return (<>
        {call.isRecievedCall && !callAccepted && (
            <div>
                <h1>{call.name} is calling</h1>
                <button onClick={answerCall}>answer</button>
                <button>Decline</button>
            </div>
        )}
        {console.log("rerender notify")}
    </>
    )
}

export default Notify
