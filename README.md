# Cookie Methdos

A set of generic methods for getting and setting cookies.

## Available methods

**setCookie( name, value, daysUntilExpiry )**  
Creates a new cookie.

**getCookie( name )**  
Returns the requested cookie if exists, or empty.

**deleteCookie( name )**  
Deletes the requested cookie; returns the deleted cookie if successful, or returns false.

**checkCookie( name )**  
Checks whether a given cookie exists; returns the cookie if found, else returns false.
