import React from "react";

function Deny(props) {
  return (
    <>
      <h1>Your application has been denied</h1>
      {props.location.state && <p>{props.location.state.message}</p>}
      <p>For more information, please contact us at 888-444-5566</p>
    </>
  );
}

export default Deny;
