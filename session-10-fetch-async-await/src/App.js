// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="App">
//       {loading ? (
//         <div>loading...</div>
//       ) : (
//         <h1>
//           Name :
//           {posts.map((post, i) => (
//             <div key={i}>
//               {i}.{post.name} <br />
//             </div>
//           ))}
//         </h1>
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data));
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <h1>
        Name :
        {posts.map((post, i) => (
          <div key={i}>
            {i}.{post.name} <br />
          </div>
        ))}
      </h1>
    </div>
  );
};

export default App;
