export const depositMoneyAction = (amount) => {
	debugger;
	return (dispatch) => {
		return dispatch({
			type: "deposit",
			payload: amount,
		});
	};
};
