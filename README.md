# Using the `eslint-plugin-jsdoc`

This guide will walk through the steps to use [the `eslint-plugin-jsdoc` package](https://www.npmjs.com/package/eslint-plugin-jsdoc) to lint the JSDoc comments in your JavaScript source code.

## Installation

1. You must have `node` and `npm` installed on your operating system.

```bash
$ node -v    
  v20.17.0
```

2. Create a new directory for your project and navigate to it in the terminal.

```bash
$  mkdir my-project && cd my-project
```

3. Initialize a new npm project:

```bash
$ npm init -y
```

4. Install the `eslint` and `eslint-plugin-jsdoc` packages as dev dependencies:

```bash
$ npm install --save-dev eslint eslint-plugin-jsdoc
```

## Configuration

5. Create an [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files) in your project root. We will name it with a `.mjs` file extension so we can import and export modules into our configuration using the ECMAScript modules (ESM) syntax.

```bash
$ touch eslint.config.mjs
```

The contents of our ESLint configuration file are shown here:

```javascript
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  jsdoc.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.mjs'],
    plugins: {
      jsdoc,
    },
    rules: {
      // add or override rules here
      'jsdoc/require-description': 'warn'
    }
  }
];
```

This configuration extends the `'flat/recommended'` rules from `eslint-plugin-jsdoc` and adds a custom rule[1].

6. If using CommonJS instead of ES modules, name your configuration file with a `.js` extension. The contents should look like this:

```javascript
const jsdoc = require('eslint-plugin-jsdoc');

module.exports = [
 // etc.
];
```

## Usage

7. Add a `lint` script to the `scripts` section of your `package.json` file. We tell the linter to look for files in our `src` directory.

```json
{
 "scripts": {
   "lint": "eslint ./src",
 }
}
```

8. Create a JavaScript file (e.g., `example.js`) with some JSDoc comments to test your setup:

```javascript
/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
 return a + b;
}
```

9. Run the linter via `npm`:

```bash
$ npm run lint
```

## Customisation

10. You can customise the rules in your `eslint.config.js`. For example:

```javascript
rules: {
  'jsdoc/require-description': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-returns': 'error'
}
```

These new rules make `eslint` flag an error if it detects a JSDoc comment without descriptions, parameter types, or a return type for functions.

11. If you're using TypeScript, you can use these TypeScript-specific configurations in your ESLint configuration file:

```javascript
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  jsdoc.configs['flat/recommended-typescript-flavor'],
  // ... rest of your config
];
```

12. For more advanced configurations, you can use settings to customise behaviour across rules in your ESLint configuration file.

For example, the following will enforce using the `@return` tag alias instead of `@returns`.

```javascript
settings: {
  jsdoc: {
    tagNamePreference: {
      returns: 'return'
    }
  }
}
```
