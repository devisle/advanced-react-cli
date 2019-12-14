const GenerateComponent = require('../../cliRoutes/ReactComponent')
const WriteUtils = require('../../cliRoutes/ReactComponent/writeUtils')

describe('Generate react component', () => {
  it('should write to current directory', () => {
    const curr = WriteUtils.writeInCurrentDir = jest.fn()
    var ComponentInfo = {
      component: 'function',
      componentName: 'sampleComponent',
      folderName: '.',
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    }
    GenerateComponent(ComponentInfo)
    expect(curr).toHaveBeenCalledWith(ComponentInfo)
  })

  it('should write to new directory', () => {
    const newDir = WriteUtils.writeInNewDir = jest.fn()
    var ComponentInfo = {
      component: 'function',
      componentName: 'sampleComponent',
      folderName: 'sampleDir',
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    }
    GenerateComponent(ComponentInfo)
    expect(newDir).toHaveBeenCalledWith(ComponentInfo)
  })
})
