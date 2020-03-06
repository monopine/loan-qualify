import React from "react";

function Thanks(props) {
  // Since we're not submitting to the server, you can find your application details in the console
  console.table(props.location.state.submission);

  return (
    <>
      <h1>Thanks!</h1>
      <p>Your application has sucesfully been submitted.</p>
    </>
  );
}

export default Thanks;
