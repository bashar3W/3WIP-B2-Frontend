import React, { useState, useEffect } from "react";

const withLoading = (WrappedComponent) => {
  const WithLoadingComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading data from an API
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);

    return <WrappedComponent loading={isLoading} {...props} />;
  };

  return WithLoadingComponent;
};

export default withLoading;
