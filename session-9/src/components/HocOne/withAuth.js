import React, { useState } from "react";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <WrappedComponent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        {...props}
      />
    );
  };

  return WithAuthComponent;
};

export default withAuth;
