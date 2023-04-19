import React from "react";
import withAuth from "./withAuth";

const MyComponent = (props) => {
  const handleIsLoggedIn = () => {
    props?.setIsLoggedIn(true);
  };

  if (props.isLoggedIn) {
    return <div>Welcome, user!</div>;
  } else {
    return (
      <div>
        <p>Please log in to continue.</p>
        <button onClick={handleIsLoggedIn}>Login</button>
      </div>
    );
  }
};

export default withAuth(MyComponent);
