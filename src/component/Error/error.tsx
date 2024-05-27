import React from "react";
import styles from "./error.module.css";


const NotFound = () => {
  return (
    <section className="not-found-page">
   
      <div className="not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </section>
  );
};

export default NotFound;
