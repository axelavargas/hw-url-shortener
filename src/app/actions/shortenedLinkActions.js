
export function shortenUrl(url) {
    return new Promise((resolve, reject) => {
            fetch('//localhost:3000/shorten', {
                method: 'POST',
                body: `{"url":"${url}"}`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(function(response) {
                if (response.status >= 400) {
                    reject(new Error("Bad response from server"));
                }
                return response.json();
            })
            .then(function(data) {
                data = Object.assign({}, {url}, data);
                resolve(data);
            });
        });
}

export function getShortCodeStats(data) {
    console.log("calling stats");
    return {
        type: "GET_SHORTCODE_STATS",
        payload: new Promise((resolve, reject) => {
            fetch(`//localhost:3000/stats/${data.shortcode}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(function(response) {
                    if (response.status >= 400) {
                        reject(new Error("Bad response from server"));
                    }
                    return response.json();
                })
                .then(function(linkWithStats) {
                    resolve(Object.assign({}, data, linkWithStats));
                });
        })
    };
}

export function submitUrl(url) {
    return dispatch => {

        return dispatch({
            type: 'GET_SHORTCODE_DATA',
            payload: shortenUrl(url).then(function(data){
                dispatch({
                    type: 'SHORTEN_URL_FULFILLED',
                    payload: data
                });
                return data;
            }).then((data) => {
                dispatch(getShortCodeStats(data));
            })
        });
    };
}