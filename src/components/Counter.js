import React, { useState, useEffect, useMemo } from "react";

function Counter() {
	const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0);
	const inc1 = () => {
		setCounterOne(counterOne + 1);
	};
	const inc2 = () => {
		setCounterTwo(counterTwo + 1);
	};

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 2000000000) i++;
		return counterOne % 2 === 0;
	}, [counterOne]);

	return (
		<div>
			{counterOne} - {counterTwo}
			<div>
				<button onClick={inc1}>One</button>
				<span>{isEven ? "even" : "Odd"}</span>
			</div>
			<div>
				<button onClick={inc2}>Two</button>
			</div>
		</div>
	);
}

export default Counter;
