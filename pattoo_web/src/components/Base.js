/* Base Application layout */

/* React Imports */
import React from "react";

/* Components Imports */
import Sidebar from "./Sidebar";

/* Styles and Assets Imports */
import "../styles/main.css";

function Base({ pageName, Component }) {
  return (
    <div className="">
      <Sidebar />
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-12 pl-10 pt-10">
          <h1 className="text-4xl font-black">{pageName}</h1>
          <div className="mt-5">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;