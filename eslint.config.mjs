import jsdoc from "eslint-plugin-jsdoc";

export default [
  jsdoc.configs["flat/recommended"],
  {
    files: ["**/*.js", "**/*.mjs"],
    plugins: {
      jsdoc,
    },
    rules: {
      // add or override rules here
      "jsdoc/require-description": "warn",
      "jsdoc/require-param-type": "error",
      "jsdoc/require-returns": "error",
      "jsdoc/no-defaults": "off",
    },
    settings: {
      jsdoc: {
        tagNamePreference: {
          returns: "return",
        },
      },
    },
  },
];
