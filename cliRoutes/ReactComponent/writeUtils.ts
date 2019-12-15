import fs from "fs";
import { ComponentCode } from "../../cliModel/starter-code/reactComponent";

type GenerateInfo = {
  component: string;
  componentName: string;
  folderName: string;
  propTypingBool: boolean;
  reactRouterBool: boolean;
  reduxBool: boolean;
};

export const writeInCurrentDir = (generateInfo: GenerateInfo) => {
  const writeStream = fs.createWriteStream(
    `./${generateInfo.componentName}.js`
  );
  writeFile(writeStream, generateInfo);

  if (generateInfo.component == "function") {
    console.log(
      `File Creation: Function component ${generateInfo.componentName} has been created successfully!`
    );
  } else {
    console.log(
      `File Creation: Class component ${generateInfo.component} has been created successfully!`
    );
  }
};

export const writeInNewDir = async (generateInfo: GenerateInfo) => {
  try {
    await fs.mkdirSync(`./${generateInfo.folderName}`, { recursive: false });

    const writeStream = fs.createWriteStream(
      `./${generateInfo.folderName}/${generateInfo.componentName}.js`
    );
    writeFile(writeStream, generateInfo);

    if (generateInfo.component == "function") {
      console.log(
        `File Creation: Function component ${generateInfo.component} in the folder ${generateInfo.folderName} has been created successfully!`
      );
    } else {
      console.log(
        `File Creation: Function component ${generateInfo.component} in the folder ${generateInfo.folderName} has been created successfully!`
      );
    }
  } catch (err) {
    handleError(err);
  }
};

function writeFile(writeStream: {}, generateInfo: {}) {
  const fileData = ComponentCode(
    `${generateInfo.component}`,
    `${generateInfo.componentName}`,
    generateInfo.propTypingBool,
    generateInfo.reactRouterBool,
    generateInfo.reduxBool
  );
  writeStream.write(fileData);
}

function handleError(err) {
  console.error(err.message);
  process.exit(1);
}
