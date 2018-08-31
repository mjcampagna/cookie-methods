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

var cookiesAllowed = function() {
	var cookiesAllowed = !!checkCookie('allowCookies');
	if ( !cookiesAllowed ) {

		// var parent = document.querySelector('.page__wrapper');
		// var child = document.createElement('div');
		// child.id = 'cookie-acceptance-notice';
		// child.classList.add('cookie-acceptance-<?php echo __c('COOKIE_ACCEPTANCE_NOTICE_LOCATION'); ?>');

		// child.innerHTML = '<div>' +
		// 	'<?php echo Markdown::text(__t('COOKIE_ACCEPTANCE_NOTICE')); ?>' +
		// '<button id="accept-cookies"><?php echo __t('COOKIE_ACCEPTANCE_LINK_TEXT'); ?></button>' +
		// '</div>';

		// var styleChild = function() {
		// 	var main = document.querySelector('.main__column').getBoundingClientRect();
		// 	child.style.width = main.width + 'px';
		// 	child.style.left = main.x + 'px';
		// };

		// styleChild();
		// parent.appendChild(child);

		// document.getElementById('accept-cookies').addEventListener('click', function(e) {
		// 	setCookie('allowCookies', 'yes', 365);
		// 	document.getElementById('cookie-acceptance-notice').remove();
		// });

		// $(window).on("resize", jQuery.debounce( 250, false, function(event){
		// 	styleChild();
		// }));
	
	}
}

cookiesAllowed();
