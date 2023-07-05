import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <div className="not-found-links">
        <Link to="/">Back to homepage...</Link>
        <Link to="/create">Back to add blogspage...</Link>
      </div>
    </div>
  );
};

export default NotFound;
