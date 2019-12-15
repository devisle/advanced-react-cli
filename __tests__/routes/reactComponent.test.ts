// const GenerateComponent = require("../../cliRoutes/ReactComponent");
// const WriteUtils = require("../../cliRoutes/ReactComponent/writeUtils.ts");

import GenerateComponent from "../../cliRoutes/ReactComponent";
import {
  writeInCurrentDir,
  writeInNewDir
} from "../../cliRoutes/ReactComponent/writeUtils";

type comp = {
  component: string;
  componentName: string;
  folderName: string;
  propTypingBool: boolean;
  reactRouterBool: boolean;
  reduxBool: boolean;
};

describe("Generate react component", () => {
  it("should write to current directory", () => {
    let writeInCurrentDir = jest.fn();
    let curr = writeInCurrentDir;
    // const curr = (writeInCurrentDir = jest.fn());
    const ComponentInfo: comp = {
      component: "function",
      componentName: "sampleComponent",
      folderName: ".",
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    };
    GenerateComponent(ComponentInfo);
    expect(curr).toHaveBeenCalledWith(ComponentInfo);
  });

  it("should write to new directory", () => {
    let writeInNewDir = jest.fn();
    let newDir = writeInNewDir;
    // const newDir = (writeInNewDir = jest.fn());
    const ComponentInfo: comp = {
      component: "function",
      componentName: "sampleComponent",
      folderName: "sampleDir",
      propTypingBool: false,
      reactRouterBool: false,
      reduxBool: false
    };
    GenerateComponent(ComponentInfo);
    expect(newDir).toHaveBeenCalledWith(ComponentInfo);
  });
});
