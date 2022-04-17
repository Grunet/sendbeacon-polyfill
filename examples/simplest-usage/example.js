import "../../index.js";

navigator.sendBeacon("http://localhost:8080/", `{"someKey":"someValue"}`);
