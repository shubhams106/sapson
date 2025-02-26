import React from "react";

import QueryForm from "@/components/forms/QueryForm";

const AskAQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a query</h1>

      <div className="mt-9">
        <QueryForm />
      </div>
    </>
  );
};

export default AskAQuestion;
