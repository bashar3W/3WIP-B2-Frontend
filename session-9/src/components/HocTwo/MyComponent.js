import React from "react";
import withLoading from "./withLoading";

const MyComponent = (props) => {
  if (props.loading) {
    return <div>Loading...</div>;
  } else {
    return <div>Loaded!</div>;
  }
};

export default withLoading(MyComponent);
