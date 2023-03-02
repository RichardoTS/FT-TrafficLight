import React, { useState } from "react"

//create your first component
const Home = () => {
	const [selectedColour, setSelectedColour] = useState("yellow");

	return (
		<div className="TrafficLight">
			<span></span>
			<div onClick={() => setSelectedColour("red")}
				className={
					"light red " + (selectedColour === "red" ? "blur" : "")
				}></div>
			<span></span>
			<div onClick={() => setSelectedColour("yellow")}
				className={
					"light yellow " + (selectedColour === "yellow" ? "blur" : "")
				}></div>
			<span></span>
			<div onClick={() => setSelectedColour("green")}
				className={
					"light green " + (selectedColour === "green" ? "blur" : "")
				}></div>
			<span></span>
		</div>
	);
};

export default Home;
