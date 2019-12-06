"use strict";

var GenerateComponent = require('../../cliRoutes/ReactComponent');

var WriteUtils = require('../../cliRoutes/ReactComponent/writeUtils');

describe('Generate react component', function () {
  it('should write to current directory', function () {
    var curr = WriteUtils.writeInCurrentDir = jest.fn();
    var ComponentInfo = {
      component: 'function',
      componentName: 'sampleComponent',
      folderName: '.',
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    };
    GenerateComponent(ComponentInfo);
    expect(curr).toHaveBeenCalledWith(ComponentInfo);
  });
  it('should write to new directory', function () {
    var newDir = WriteUtils.writeInNewDir = jest.fn();
    var ComponentInfo = {
      component: 'function',
      componentName: 'sampleComponent',
      folderName: 'sampleDir',
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    };
    GenerateComponent(ComponentInfo);
    expect(newDir).toHaveBeenCalledWith(ComponentInfo);
  });
});