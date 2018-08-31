# Cookie Methods

A set of generic methods for getting and setting cookies.

## Methods

### setCookie( name, value, daysUntilExpiry )

Creates a new cookie.

```js
setCookie('allowCookies', 'yes', 365);
```

### getCookie( name )

Returns the requested cookie if exists, or empty.

```js
getCookie( 'allowCookies' );
```

### deleteCookie( name )

Deletes the requested cookie; returns the deleted cookie if successful, or returns false.

```js
deleteCookie( 'allowCookies' );
```

### checkCookie( name )

Checks whether a given cookie exists; returns the cookie if found, else returns false.

```js
checkCookie( 'allowCookies' );
```
