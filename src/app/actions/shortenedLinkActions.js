export function shortenUrl(url) {
    return {
        type: "SHORTEN_URL",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({url: "rest", shortcode: 'example'});
            }, 200);
        })
    };
}