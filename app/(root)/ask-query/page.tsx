import React from "react";

import { auth } from "@/auth";
import QueryForm from "@/components/forms/QueryForm";

const AskAQuestion = async () => {
  const session = await auth();

  return (
    <section className="max-w-5xl mx-auto pt-16">
      <h1 className="h1-bold text-dark100_light900">Ask a query</h1>

      <div className="mt-9">
        <QueryForm session={session} />
      </div>
    </section>
  );
};

export default AskAQuestion;
