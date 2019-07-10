module.exports = (componentType, fileName) => {
  //Function Component
  if (componentType === "function") {
    return `import React from "react";
const ${fileName} = () => {
return <div>Hello World </div>;
};
export default ${fileName};`;
  }

  // Class Component
  else if (componentType === "class") {
    return `import React, { Component } from 'react'
class ${fileName} extends Component {
  render() {
    return (
      <div>
        // Class Component
      </div>
    )
  }
}
export default ${fileName};`;
  }
};
