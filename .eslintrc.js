module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },

    "parser": "babel-eslint",

    "extends": ["eslint:recommended", "airbnb"],
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "func-names": ["error", "never"],
        "indent": [1, 4, { "SwitchCase": 1 }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}],
        "react/prefer-stateless-function": ["warn"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/no-unused-prop-types": ["warn", { "skipShapeProps": true }],
        "jsx-quotes": ["error", "prefer-single"],
        "global-require": ["off"],
        "consistent-this": [1, "self"],
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
        "no-use-before-define": ["off", { "functions": false }],
        "import/extensions": [1, { "js":"never", "json":"always" }],
        "import/no-extraneous-dependencies": ["off"],
        "import/no-unresolved": ["error", {"ignore": ["app", "views", "components", "api", "styles",
            "lib", "images", "store", "actions", "reducers", "i18n"]}],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [2, "single", { "avoidEscape": true }],
        "semi": [
            "error",
            "always"
        ]
    }
};
