// ExampleComponent.js

import React from 'react';
import StrapiService from "./StrapiService.js";

const ExampleComponent = ({ endpoint }) => {
  const { data, loading, error } = StrapiService({ endpoint });
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && data.map((post) => (
        <div key={post.id}>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.descriiption}</p>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
