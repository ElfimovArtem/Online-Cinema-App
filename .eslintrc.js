module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  env: {
    browser: true,
    jest: true
  },
  extends:  [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'airbnb'
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  plugins: ["import"],
  rules:  {
    "linebreak-style": ["error", "unix"],
    "semi": "error",
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": 0,
    "curly": ["error", "all"],
    // It's better to set it up
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-case-declarations": 0,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/href-no-hash": "off",
    "object-curly-spacing": ["error", "always"],
    "class-methods-use-this": ["warn", { "exceptMethods": ["render"]}],
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],
    "no-use-before-define": ["error", { "functions": false }],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }],
    "no-return-assign": "off",
    "no-duplicate-imports": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/require-default-props": "off",
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
    "react/prefer-stateless-function": ["off", { "ignorePureComponents": true }],
    "react/prop-types": [
      "warn",
      {
        "ignore": [
          "children",
          "location",
          "props"
        ],
        "customValidators": []
      }
    ],
    "react/no-unused-prop-types": 0,
    "react/no-array-index-key": 1,
    "react/destructuring-assignment": 0,
    "react/no-children-prop": 0,
    "@typescript-eslint/explicit-function-return-type": 0
  },
  settings:  {
    react:  {
      version:  'detect',
    },
    'import/resolver': {
      "typescript": {}
    }
  },
};
