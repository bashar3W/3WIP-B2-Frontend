import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AsyncHome = lazy(() => import("./Home"));
const AsyncAbout = lazy(() => import("./About"));

const SuspenseApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<AsyncHome />} />
        <Route path="/about" element={<AsyncAbout />} />
      </Routes>
    </Suspense>
  );
};

export default SuspenseApp;
