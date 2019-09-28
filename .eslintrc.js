module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  globals: {
    cy: true,
    context: true,
    assert: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "arrow-body-style": [1, "as-needed"],
    "class-methods-use-this": 0,
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    // ignore not being able to resolve relative imports
    // for some reason relative imports were throwing a lot of false positives
    "import/prefer-default-export": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "prefer-destructuring": 1,
    "prefer-template": 2,
    quotes: [1, "single", { avoidEscape: true }],
    "require-yield": 0
  },
  overrides: [
    {
      // these overrides allow us to use the console and use unused expressions
      // such as `expect(value).to.be.true;` without causing linting errors
      // no-unused-expressions and no-console will be ignored in all files
      // ending in either .test.js or .spec.js
      files: ["*.test.js", "*.spec.js"],
      rules: {
        "no-unused-expressions": 0,
        "no-console": 0
      }
    }
  ]
};
