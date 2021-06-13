import React, { useState, useMemo } from "react";

function TransactionTable({ txns }) {
	const data = [
		{
			name: "a",
			amount: 11023,
		},
		{
			name: "b",
			amount: 45,
		},
		{
			name: "bb",
			amount: 546,
		},
		{
			name: "c",
			amount: 768,
		},
		{
			name: "cv",
			amount: 987,
		},
	];

	const [myTxns, setMyTxns] = useState(data);

	// const sort = useMemo(() => {
	// 	myTxns.sort(
	// 		(firstItem, secondItem) => firstItem.amount - secondItem.amount
	// 	);
	// 	setMyTxns(myTxns);
	// 	console.log(myTxns);
	// }, [myTxns]);

	const sort = () => {
		let copyData = JSON.parse(JSON.stringify(myTxns));
		copyData.sort(
			(firstItem, secondItem) => firstItem.amount - secondItem.amount
		);
		setMyTxns(copyData);
		console.log(myTxns);
	};

	return (
		<div className="table">
			<table>
				<tr>
					<th>Name</th>
					<th>
						<span onClick={sort}>Amount</span>
					</th>
				</tr>

				{myTxns.map((e) => {
					return (
						<tr>
							<td>{e.name}</td>
							<td>{e.amount}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default TransactionTable;
