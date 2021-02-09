import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <>
      <div className="copyright">
        <p>© Copyright {/* insert name */}. </p>
        <p>
          {" "}
          Webdeveloped by
          <i class="fas fa-code"> {/* insert name */}</i>
        </p>
      </div>
    </>
  );
}

export default Copyright;
