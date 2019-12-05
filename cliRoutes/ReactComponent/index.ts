const WriteUtils = require('./writeUtils')

export default GenerateComponent;

function GenerateComponent (generateInfo) {
  if (['.', ''].includes(generateInfo.folderName)) {
    WriteUtils.writeInCurrentDir(generateInfo)
  } else {
    WriteUtils.writeInNewDir(generateInfo)
  }
}
