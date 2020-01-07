module.exports = {
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    indent: "off",
    "@typescript-eslint/indent": "off", // -> we use prettier
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": ["error", "single", { avoidEscape: true }],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "constructor-super": "error",
    curly: ["error", "multi-line"],
    "dot-notation": "off",
    "eol-last": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    /* 'id-blacklist': [ // bug
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
    ],
    */
    "id-match": "error",
    "import/no-unassigned-import": "error",
    "max-len": [
      "off",
      {
        code: 80
      }
    ],
    "no-bitwise": "off",
    "no-caller": "error",
    "no-console": [
      "error",
      {
        allow: [
          "log",
          "info",
          "dirxml",
          "warn",
          "error",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table",
          "Console",
          "markTimeline",
          "profile",
          "profileEnd",
          "timeline",
          "timelineEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-restricted-properties": [
      2,
      { object: "describe", property: "only", message: "Don't focus tests." },
      { object: "it", property: "only", message: "Don't focus tests." },
      { object: "test", property: "only", message: "Don't focus tests." }
    ],
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all"
      }
    ],
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all"
      }
    ],
    radix: "error",
    "spaced-comment": "error",
    "use-isnan": "error"
  }
};
