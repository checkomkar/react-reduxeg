import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";
import ComponentD from "../ComponentD";

function ComponentB() {
	const user = useContext(UserContext);
	const channel = useContext(ChannelContext);
	return (
		<div>
			{/* {user} - {channel}
			<UserContext.Consumer>
				{(user) => {
					return <p>User is {user}</p>;
				}}
			</UserContext.Consumer> */}
			<ComponentD />
		</div>
	);
}

export default ComponentB;
