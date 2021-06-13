export const withdrawMoneyAction = (amount) => {
	return (dispatch) => {
		return dispatch({
			type: "withdraw",
			payload: amount,
		});
	};
};
