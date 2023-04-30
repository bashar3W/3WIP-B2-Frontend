import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PostDetails from "./Components/PostDetails";
import Posts from "./Components/Posts";
import Redux from "./Components/CounterComponent";
import CounterComponent from "./Components/CounterComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts />,
    },
    {
      path: "/postDetails/:id",
      element: <PostDetails />,
    },
    {
      path: "/redux",
      element: <CounterComponent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
