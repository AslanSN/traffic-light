import React, { useState } from "react";

//Styles
import Style from "../../styles/Home.scss";

/**
 * !Sets a traffic light
 * @returns HTML
 */
const Home = () => {
	//Hooks
	const [glowing, setGlowing] = useState("");

	return (
		<div id="container">
			<div className="trafficLight">
				<div
					onClick={() => setGlowing("red")}
					className={
						"red" + (glowing === "red" ? " glow" : "")
					}></div>

				<div
					onClick={() => setGlowing("yellow")}
					className={
						"yellow" + (glowing === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setGlowing("green")}
					className={
						"green" + (glowing === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
