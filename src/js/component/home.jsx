import React, { useState } from "react"

//create your first component
const Home = () => {
	const [selectedColour, setSelectedColour] = useState("green");

	return (
		<div className="TrafficLight">
			<div onClick={() => setSelectedColour("red")}
				className={
					"light red " + (selectedColour === "red" ? "red": "")
				}></div>
			<div onClick={() => setSelectedColour("yellow")}
				className={
					"light yellow " + (selectedColour === "yellow" ? "yellow": "")
				}></div>
			<div onClick={() => setSelectedColour("green")}
				className={
					"light green " + (selectedColour === "green" ? "green": "")
				}></div>
		</div>
	);
};

export default Home;
