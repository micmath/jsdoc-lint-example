# Using the `eslint-plugin-jsdoc`

This guide will walk through the steps to use [the `eslint-plugin-jsdoc` package](https://www.npmjs.com/package/eslint-plugin-jsdoc) to lint the JSDoc comments in your JavaScript source code.

## Installation

1. Ensure you have `node` and `npm` installed on your operating system.

```bash
$ node -v    
  v20.17.0
$ npm -v                            
  10.8.2
```

2. If necessary, create a new directory for your project and navigate to it in the terminal.

```bash
$  mkdir my-project && cd my-project
```

3. Initialise your new project with npm:

```bash
$ npm init -y
```

4. Install the `eslint` and `eslint-plugin-jsdoc` packages as dev dependencies:

```bash
$ npm install --save-dev eslint eslint-plugin-jsdoc
```

## Configuration

5. Create an [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files) in your project root. We will name ours with an `.mjs` file extension so we can import and export modules into the configuration using the ECMAScript modules (ESM) syntax.

```bash
$ touch eslint.config.mjs
```

The contents of our ESLint configuration file are shown below:

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

This example configuration *extends* [the `'flat/recommended'` rules](https://www.npmjs.com/package/eslint-plugin-jsdoc#flat-config) from `eslint-plugin-jsdoc` and includes one bespoke rule.

6. If using **CommonJS** instead of ES modules, name your configuration file with a plain `.js` file extension. The CommonJS version will look like this:

```javascript
const jsdoc = require('eslint-plugin-jsdoc');

module.exports = [
 // this is the same
];
```

## Usage

7. Add a `lint` entry to the `scripts` section of your `package.json` file. This will run the `eslint` binary aliased at `node_modules/.bin/eslint`.

In our case we tell the `eslint` to look for files in our `./src` directory.

```json
{
  "scripts": {
    "lint": "eslint ./src",
  }
}
```

8. Create a JavaScript file in the `src` folder to try your setup out. Include some JSDoc comments:

```javascript
/**
 * Adds two numbers.
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

When you execute this command from the terminal it will either print a list of warnings and errors, or display nothing (meaning no problems were found).

If you want to see more information from `eslint` you can change the "lint" script in your `package.json` to output debugging information by adding a `DEBUG` flag:

```json
{
  ...
  "scripts": {
    "lint": "DEBUG=eslint:linter eslint ./src"
  }
}
```

## Customisation

10. You can customise the rules in your `eslint.config.mjs`. For example:

```javascript
rules: {
  'jsdoc/require-description': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-returns': 'error'
}
```

These new rules make `eslint` produce an error if it finds a JSDoc comment without descriptions, parameter types, or a return type for functions.

The complete set of available [rules are documented](https://github.com/gajus/eslint-plugin-jsdoc/tree/main/.README/rules) in the `eslint-plugin-jsdoc` repository.

11. Further configurations can be added to the `settings` object in your ESLint configuration file.

```javascript
{
  ...
  "settings": {
    "jsdoc": {
      "tagNamePreference": {
        "returns": "return"
      }
    }
  }
}
```

This setting, for example, will tell `eslint-plugin-jsdoc` to enforce the use of the `@return` tag alias instead of `@returns` in your JSDoc comments.
