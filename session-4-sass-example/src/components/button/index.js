import React from "react";

const Button = (props) => {
  const { styles, name } = props;

  return <div className={`${styles}`}>{name}</div>;
};

export default Button;
