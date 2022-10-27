import React from 'react';

const Blog = () => {
    return (
        <div class="card">
  <div class="card-header">
    Blog
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <h1>What is cors?</h1>
      <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>


     
    </blockquote>
  </div>
</div>
    );
};

export default Blog;