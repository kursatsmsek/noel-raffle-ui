import React from "react";

function AgreementContainer({ type, page }) {
  return (
    <div style={{ padding: "5%" }}>
      <h1 style={{ marginBottom: "2%" }}>
        {type === "user"
          ? page.place.userAgreement
          : page.place.confidentialityAgreement}
      </h1>
      <p>
        {type === "user"
          ? page.place.userAgreementParagraph
          : page.place.confidentialityAgreementParagraph}
      </p>
    </div>
  );
}

export default AgreementContainer;
