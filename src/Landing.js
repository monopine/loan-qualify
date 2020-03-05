import React from "react";

import SignUpForm from "./components/sign-up-form";

function Landing() {
  return (
    <div className="page-wrap">
      <div className="page-heading">
        <h1>Loan Qualification</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure
          ratione expedita, itaque, accusantium unde adipisci corrupti
          asperiores quod rem illo sunt maiores pariatur deserunt incidunt
          eveniet reiciendis atque. Molestias consectetur quas sequi!
        </p>
      </div>
      <SignUpForm />
      <div className="page-footer">
        <div className="disclosure">
          <h5 className="title">Disclosures</h5>
          <p>
            Molestias consectetur quas sequi. itaque, accusantium unde adipisci
            corrupti asperiores quod rem illo sunt maiores pariatur deserunt
            incidunt eveniet reiciendis atque. Molestias consectetur quas sequi.
            Molestias consectetur quas sequi itaque, accusantium unde adipisci
            corrupti asperiores quod rem illo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
