"use strict";

const getCookieByName = name => {
    const cookies = document.cookie;

    let begin = cookies.indexOf(name + "=");
    if (begin === -1) {
         return ""; 
    }
    else { 
        begin = begin + (name.length + 1);
        let end = cookies.indexOf(";", begin);
        if (end === -1) { 
            end = cookies.length;
        }
        const cookie_data = cookies.substring(begin, end);
        return decodeURIComponent(cookie_data);
    }

};

const setCookie = (name, value, days) => {
    let cookie_info = name + "=" + encodeURIComponent(value);
    if (days) {
        cookie_info += "; max-age=" + days * 24 * 60 * 60;
    }
    cookie_info += "; path=/";
    document.cookie = cookie_info;
};

const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};

const goToPage = url => {
    location.href = url;
};