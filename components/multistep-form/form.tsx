"use client";
import { useFormState } from "./context/formContext";

import { UserNameForm } from "./components/form-step1";
import { PasswordForm } from "./components/form-step2";
import { EmailForm } from "./components/form-step3";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 0:
      return <UserNameForm />;
    case 1:
      return <EmailForm />;
    case 2:
      return <PasswordForm />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-full max-w-2xl  border  rounded-xl bg-white">
        <h1 className="text-center text-2xl font-semibold py-4">
          Sign Up Form
        </h1>
        <div className="space-y-6">
          <ActiveStepFormComponent />
        </div>
      </div>
    </main>
  );
}
