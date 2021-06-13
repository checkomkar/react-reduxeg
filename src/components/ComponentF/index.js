import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentF() {
	const countContext = useContext(CountContext);
	console.log("component F");
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

export default React.memo(ComponentF);