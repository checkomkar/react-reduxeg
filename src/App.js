import logo from "./logo.svg";
import React, { useReducer, useState, useEffect, useCallback } from "react";
import "./App.css";
import TransactionTable from "./components/TransactionTable";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ComponentB from "./components/ComponentB";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import DatafetchOne from "./components/DataFetchOne.js";
import DataFetchTwo from "./components/DataFetchTwo";
import Button from "./components/Button";
import ComponentF from "./components/ComponentF";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();
const initialState = 0;
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

function App() {
	// const [count, dispatch] = useReducer(reducer, initialState);
	const [value, setValue] = useState(1);
	const increment = useCallback((val) => {
		setValue(val + 1);
	}, value);
	useEffect(() => {}, []);
	const state = useSelector((state) => state);
	// console.log(state);
	const dispatch = useDispatch();

	const { withdrawMoney, depositMoney } = bindActionCreators(
		actionCreators,
		dispatch
	);

	// console.log(bindActionCreators(actionCreators, dispatch));
	return (
		// <CountContext.Provider
		// 	value={{ countState: count, countDispatch: dispatch }}
		// >
		// 	<div className="App">
		// 		{/* <TransactionTable /> */}
		// 		{/* <UserContext.Provider value={"Yuvaan"}>
		// 		<ChannelContext.Provider value={"Life on the fly"}>
		// 			<ComponentB />
		// 		</ChannelContext.Provider>
		// 	</UserContext.Provider>
		// 	<CounterOne />
		// 	<CounterTwo /> */}
		// 		{/* Count - {count}
		// 		<ComponentA />
		// 		<ComponentB />
		// 		<ComponentC /> */}
		// 		{/* <DatafetchOne /> */}
		// 		{/* <DataFetchTwo /> */}
		// 		{/* {value}
		// 		<Button inc={increment} val={value} />
		// 		<ComponentF /> */}
		// 		{/* <Counter /> */}
		// 		{/* <FocusInput /> */}
		// 		{/* <ClassTimer /> */}
		// 		<HookTimer />
		// 	</div>
		// </CountContext.Provider>

		<div className="App">
			{state.account}
			<button onClick={() => depositMoney(1)()}>Deposit $1</button>
			<button onClick={() => withdrawMoney(1)()}>Withdraw $1</button>
		</div>
	);
}

export default App;
