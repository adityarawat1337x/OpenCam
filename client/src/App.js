import React from 'react'

import VideoPlayer from "./components/VideoPlayer"
import Options from "./components/Options"
import Notify from "./components/Notify"

const App = () => {
    return (
        <>
            <div>
                <h1> Video Chat</h1>
            </div>
            <VideoPlayer/>
            <Options>
            <Notify/>
            </Options>
         </>
    )
}

export default App
