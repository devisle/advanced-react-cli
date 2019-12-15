const WriteUtils = require("./writeUtils");

type generateInfo = {
  component: string;
  componentName: string;
  folderName: string;
  propTypingBool: boolean;
  reactRouterBool: boolean;
  reduxBool: boolean;
};

function GenerateComponent(generateInfo: generateInfo) {
  if ([".", ""].includes(generateInfo.folderName)) {
    WriteUtils.writeInCurrentDir(generateInfo);
  } else {
    WriteUtils.writeInNewDir(generateInfo);
  }
}

export default GenerateComponent;
