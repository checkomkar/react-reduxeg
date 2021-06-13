// import { depositMoneyAction } from "./depositAction";
// import { withdrawMoneyAction } from "./withdrawAction";

// export const depositMoney = depositMoneyAction;
// export const withdrawMoney = withdrawMoneyAction;
export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "deposit",
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "withdraw",
			payload: amount,
		});
	};
};
