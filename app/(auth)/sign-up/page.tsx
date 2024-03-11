import React from "react";
import SignUpForm from "../_components/signUp-Form";
const SignUpPage = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-neutral-400/20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
