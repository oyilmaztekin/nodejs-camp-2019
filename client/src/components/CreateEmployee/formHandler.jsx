import React from "react";

const formHandlerHOC = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          firstInputName={"İsim Soyisim"}
        />
      );
    }
  };
};

export default formHandlerHOC;