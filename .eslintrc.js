module.exports = {
  "parser":  "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "jest": true
  },
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "jsx":  true
    },
    "project": "./tsconfig.json",
    "tsconfigRootDir": "./"
  },
  "plugins": ["@typescript-eslint", "import", "react"],
  "extends": ["airbnb-typescript"],
  "rules": {
    "import/prefer-default-export": 0,
    "max-len": [
      "error",
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "react/destructuring-assignment": 0,
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "object-curly-spacing": ["error", "always"],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]
  },
  "settings": {
    "react": {
      "version":  "detect"
    },
    "import/resolver": {
      "typescript": {}
    }
  }
};
