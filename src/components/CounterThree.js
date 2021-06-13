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

function CounterThree() {
	const [count, dispatch] = useReducer(reducer, initialState);
	const [count2, dispatch2] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>{count}</h1>

			<button onClick={() => dispatch("dec")}>{"<"}</button>

			<button onClick={() => dispatch("inc")}>{">"}</button>

			<button onClick={() => dispatch("reset")}>Reset</button>

			<h1>{count2}</h1>

			<button onClick={() => dispatch2("dec")}>{"<"}</button>

			<button onClick={() => dispatch2("inc")}>{">"}</button>

			<button onClick={() => dispatch2("reset")}>Reset</button>
		</div>
	);
}

export default CounterThree;
