/* eslint-env node */
module.exports = {
    extends: [ "./typescript.js" ],
    parser: require.resolve("vue-eslint-parser"),
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
        extraFileExtensions: [ ".vue" ]
    },
    overrides: [
        {
            files: [ "*.ts", "*.tsx" ],
            parserOptions: { project: "./tsconfig.json" }
        }
    ],
    rules: {}
};
