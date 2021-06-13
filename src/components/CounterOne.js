import React, { useReducer } from "react";

const initialState = 0;
const images = ["First", "second", "third"];
const reducer = (state, action) => {
	switch (action) {
		case "inc":
			return state + 1;
		case "dec":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

const slideLeft = (dispatch) => {
	dispatch("inc");
};

const slideRight = (dispatch) => {
	dispatch("dec");
};

function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>
				{images[count]} {images.length}
			</h1>

			{count > 0 && (
				<button onClick={() => dispatch("dec")}>{"<"}</button>
			)}
			{count < images.length - 1 && (
				<button onClick={() => dispatch("inc")}>{">"}</button>
			)}
			<button onClick={() => dispatch("reset")}>Reset</button>
		</div>
	);
}

export default CounterOne;
