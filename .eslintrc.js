{
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
  "react/destructuring-assignment": 0,
    "import/prefer-default-export": 0,
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
}
