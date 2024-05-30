# eslint-config-ultra-mega

the best eslint config 🔧🔥⚙️

## use

`npm install eslint-config-ultra-mega --save-dev`

then in your eslint config file:

for ESM:

```js
import ultraMegaConfig = from 'eslint-config-ultra-mega';

export default [
  ...ultraMegaConfig,
];
```

or for CJS:

```js
const ultraMegaConfig = require('eslint-config-ultra-mega');

module.exports = [
  ...ultraMegaConfig,
];
```

see the [eslint docs](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config) for more information
