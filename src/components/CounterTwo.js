import React, { useReducer } from "react";

const initialState = {
	firstCounter: 0,
	secondCounter: 2,
};
const images = ["First", "second", "third"];
const reducer = (state, action) => {
	switch (action.type) {
		case "inc":
			return {
				...state,
				firstCounter: state.firstCounter + action.value,
			};
		case "dec":
			return {
				...state,
				firstCounter: state.firstCounter - action.value,
			};
		case "inc2":
			return {
				...state,
				secondCounter: state.secondCounter + action.value,
			};
		case "dec2":
			return {
				...state,
				secondCounter: state.secondCounter - action.value,
			};
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
				{/* {images[count]} {images.length} */}
				{count.firstCounter}
			</h1>
			<p>{count.secondCounter}</p>

			{count.firstCounter > 0 && (
				<button onClick={() => dispatch({ type: "dec", value: 1 })}>
					{"<"}
				</button>
			)}
			<button onClick={() => dispatch({ type: "inc", value: 1 })}>
				{">"}
			</button>
			<button onClick={() => dispatch({ type: "inc2", value: 2 })}>
				Inc2
			</button>
			<button onClick={() => dispatch({ type: "dec2", value: 2 })}>
				Dec2
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
}

export default CounterOne;
