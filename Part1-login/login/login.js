"use strict";

const getCookieByName = name => {
    const cookieDate = document.cookie;
// Cookie variable is created to store cookie data
    let startCookie = cookieDate.indexOf(name + "=");
    if (startCookie === -1) {
         return ""; 
    }
    else { 
        // Cookie data is set
        startCookie = startCookie + (name.length + 1);
        let finishCookieData = cookieDate.indexOf(";", startCookie);
        if (finishCookieData === -1) { 
            finishCookieData = cookieDate.length;
        }
        const cookie_data = cookieDate.substring(startCookie, finishCookieData);
        return decodeURIComponent(cookie_data);
    }

};

// Cookie age is set
const setCookie = (name, value, days) => {
    let cookieInfo = name + "=" + encodeURIComponent(value);
    if (days) {
        cookieInfo += "; max-age=" + days * 24 * 60 * 60;
    }
    cookieInfo += "; path=/";
    document.cookie = cookieInfo;
};

// Cookied delete code
const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};

// Navigate to url 
const goToPage = url => {
    location.href = url;
};