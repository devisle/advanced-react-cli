var generateComponent = require('../../cliRoutes/ReactComponent')
var writeUtils = require('../../cliRoutes/ReactComponent/writeUtils')

describe('Generate react component', () => {
  it('should write to current directory', () => {
    writeUtils.writeInCurrentDir = jest.fn()
    var componentInfo = {
      component: 'function',
      componentName: 'sampleComponent',
      folderName: '.',
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    }
    generateComponent(componentInfo)
    expect(writeUtils.writeInCurrentDir).toHaveBeenCalledWith(componentInfo)
  })

  it('should write to new directory', () => {
    writeUtils.writeInNewDir = jest.fn()
    var componentInfo = {
      component: 'function',
      componentName: 'sampleComponent',
      folderName: 'sampleDir',
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    }
    generateComponent(componentInfo)
    expect(writeUtils.writeInNewDir).toHaveBeenCalledWith(componentInfo)
  })
})
