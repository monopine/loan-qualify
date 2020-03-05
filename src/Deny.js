import React from "react";

function Deny(props) {
  return (
    <>
      <h1>Unfortnately your application has been rejected</h1>
      <p>{props.location.state.message}</p>
      <p>For more information, please contact us at 888-444-5566</p>
    </>
  );
}

export default Deny;
