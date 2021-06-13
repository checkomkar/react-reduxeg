import React from "react";

function Button(props) {
	console.log("Button");
	return (
		<div>
			<button onClick={() => props.inc(props.val)}>Click me!</button>
		</div>
	);
}

export default React.memo(Button);
