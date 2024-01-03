import React from "react";
import {Spinner} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Loader.css"

function Loader() {
  return (
    <div className="customSpinner">
          <Spinner className="spinnerSize"/>
    </div>
  );
}

export default Loader;