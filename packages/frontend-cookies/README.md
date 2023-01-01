# Sequelize Session Storage

Get, set, and delete cookies in a browser

## Usage

```js
import { setCookie, getCookie, eraseCookie } from "frontend-cookies";

// set cookie
setCookie("myCookie", "hello", 7);

// get cookie
const myCookie = getCookie("myCookie");

// delete cookie
eraseCookie("myCookie");
```
