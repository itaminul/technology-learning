"use client";
import dynamic from "next/dynamic";
const SignInForm = dynamic(() => import('../signin/signInForm'), { ssr: false});
const SingIn = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SingIn;
