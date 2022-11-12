import React from "react";
function Container(props) {
  return (
    <>
      <div id="container" className="container">
        {props.data}
      </div>
    </>
  );
}

export default Container;
