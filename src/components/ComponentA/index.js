import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<button onClick={() => countContext.countDispatch("inc")}>
				Inc
			</button>
			<button onClick={() => countContext.countDispatch("dec")}>
				Dec
			</button>
			<button onClick={() => countContext.countDispatch("reset")}>
				Reset
			</button>
		</div>
	);
}

export default ComponentA;
