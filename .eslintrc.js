module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "rules": {
    "brace-style": [2, "1tbs", { "allowSingleLine": false }],
    "indent": [2,4, { "SwitchCase": 1 }],
    "no-var":["error"]
  }
};
