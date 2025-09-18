import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen container flex flex-col md:flex-row justify-around items-center">
      {/* placeholder for image */}
      <div className="bg-darkGray w-[500px] h-[700px] hidden md:block"></div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
