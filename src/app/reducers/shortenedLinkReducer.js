//Reducer
const shortenedLinkReducer = (state = [], action) => {
	//Always use unique actions
	switch (action.type) {
        case "SHORTEN_URL_FULFILLED":
            state = [...state, action.payload];
            break;
		case "GET_SHORTCODE_STATS_FULFILLED":
        	state = [...state];
            for(let i =0; i<state.length; i++) {
            	let link = state[i];
            	if (link.shortcode === action.payload.shortcode) {
                    state[i] = Object.assign({}, link, action.payload);
            		break;
				}
			}
            break;
    }
	return state;
};

export default shortenedLinkReducer;