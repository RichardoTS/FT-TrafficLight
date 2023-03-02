import React, { useState } from "react"

//create your first component
const Home = () => {
	const [selectedColour, setSelectedColour] = useState("yellow");

	return (
		<div className="TrafficLight">
			
			<div onClick={() => setSelectedColour("red")}
				className={
					"light red " + (selectedColour === "red" ? "blur" : "")
				}></div>
			
			<div onClick={() => setSelectedColour("yellow")}
				className={
					"light yellow " + (selectedColour === "yellow" ? "blur" : "")
				}></div>
			
			<div onClick={() => setSelectedColour("green")}
				className={
					"light green " + (selectedColour === "green" ? "blur" : "")
				}></div>
			
		</div>
	);
};

export default Home;
