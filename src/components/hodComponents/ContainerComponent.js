import React from "react";

const ContainerComponent = props => {
  return <div className={props.classes}>{props.children}</div>;
};
export default ContainerComponent;
