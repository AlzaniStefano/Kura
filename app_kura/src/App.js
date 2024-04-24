import React from "react";
import ExampleComponent from "./components/ExampleComponent";

const App = () => {
  const strapiEndpoint = 'http://localhost:1337/api/posts';

  return (
    <div className="App">
      <h1>My Strapi App</h1>
      <ExampleComponent endpoint={strapiEndpoint} />
    </div>
  );
};

export default App;