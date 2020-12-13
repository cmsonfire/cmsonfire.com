## components

This `module` library is going to be a cross use library for React and Preact. Toast will be using Preact and the cms will be using React.

The transpiled code is created by `microbundle` with the @jsx pragma using `createElement` so all components using jsx syntax must import the named import `createElement` rather than use the default React import (`React.createElement`).

React becomes a `peerDependency` which will transpile the library with React as an external. This will allow us to use the preact replacement in Toast easily.

### Example

When you run:

```sh
microbundle -i src/hello.js -o dist/hello.js -f modern --jsx createElement --no-compress --no-pkg-main
```

`src/hello.js`

```javascript
import { createElement } from "react";

export const Hello = (props) => <div>Hello World!</div>;
```

`dist/hello.js` (outputs modern esm)

```javascript
import { createElement } from "react";

const Hello = (props) => createElement("div", null, "Hello World!");

export { Hello };
```
