module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "stories"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },      
    ],
       "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function", 
        unnamedComponents: "arrow-function", 
      },
    ],
    "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }],
    "import/no-cycle": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/no-unstable-nested-components": ["error", { "allowAsProps": true }],
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect", //NOTE: Автоопределение версии React для eslint-plugin-react
    },
  },
}
