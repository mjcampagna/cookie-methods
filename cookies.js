'use strict';

var setCookie = function(name, value, daysUntilExpiry) {
	var expires = new Date();
	expires.setTime(expires.getTime() + (daysUntilExpiry * 24 * 60 * 60 * 1000));
	var cookie = document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
	return cookie;
}

var getCookie = function(name) {
	name = name + '=';
	var cookies = document.cookie.split(';');
	for ( var i = 0; i < cookies.length; i += 1 ) {
		var cookie = cookies[i];
		if (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) > -1) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return '';
}

var deleteCookie = function(name) {
	var value = checkCookie(name);
	if ( value ) {
		var cookie = document.cookie = name + '=' + value + '; expires=' + new Date() + '; path=/';
		return cookie;
	}
	return false;
}

var checkCookie = function(name) {
	var cookie = getCookie(name);
	if ( cookie !== '' ) {
		return cookie;
	} else {
		return false;
	}
}
