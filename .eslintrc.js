module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": ["error"]
    },
    root: true,
    overrides: [
        {
            "files": ["/build/*.js"]
        }
    ]
}