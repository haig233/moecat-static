const searchPro = function (k, v) {
    let newUrl;
    if (location.search[0] === "?") {
        if (new RegExp(k + "=.*&?", 'g').test(location.search)) {
            newUrl = location.href.replace(new RegExp(k + "=.*&?", 'g').exec(location.href)[0], k + '=' + v + '&');
        } else {
            newUrl = location.href + "&" + k + "=" + v
        }
    } else {
        newUrl = location.href + "?" + k + "=" + v
    }
    if (newUrl[newUrl.length - 1] === "&") {
        newUrl = newUrl.slice(0, newUrl.length - 1)
    }
    location.href = newUrl
};