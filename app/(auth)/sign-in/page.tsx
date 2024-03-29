import React from "react";

import SignInForm from "../_components/signIn-Form";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-neutral-400/20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
