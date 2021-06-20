import React from "react";
import "./styles.css";
import VideoPlayer from "./components/VideoPlayer";
import Header from "./components/Header";
import Options from "./components/Options";
import Notify from "./components/Notify";

const App = () => {
	return (
		<>
			<Header />
			<Notify />
			<VideoPlayer />
			<Options />
		</>
	);
};

export default App;
