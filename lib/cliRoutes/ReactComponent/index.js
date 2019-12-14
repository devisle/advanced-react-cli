"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var WriteUtils = require('./writeUtils');

var _default = GenerateComponent;
exports["default"] = _default;

function GenerateComponent(generateInfo) {
  if (['.', ''].includes(generateInfo.folderName)) {
    WriteUtils.writeInCurrentDir(generateInfo);
  } else {
    WriteUtils.writeInNewDir(generateInfo);
  }
}