# sendbeacon-polyfill

A polyfill for navigator.sendBeacon using fetch, for runtimes like Deno missing
the former

## Why not in TS?

The type declarations for fetch didn't match with the documentation on MDN (in
particular URL objects weren't allowed for the first parameter).

Also there was no type declaration for sendBeacon in Deno, so it was erroring
out on that too.
