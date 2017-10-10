//Reducer
const shortenedLinkReducer = (state = [], action) => {
	//Always use unique actions
	switch (action.type) {
		case "SHORTEN_URL_FULFILLED":
			state = [...state, action.payload];
			break;
	}
	return state;
};

export default shortenedLinkReducer;