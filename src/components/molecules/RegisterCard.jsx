import {Link} from "react-router-dom";
import CustomeInputs from "../atoms/CustomeInputs";
import CustomeButton from "../atoms/customeButton";

const RegisterCard = () => {
  return (
    <>
      {/* This is an example component */}
      <div className="w-full max-w-lg   mx-auto">
        <div className=" w-full p-4 sm:p-6 lg:p-8 ">
          <form className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Register
            </h3>
            <CustomeInputs
              type="text"
              placeholder="Enter your name"
              name="full name"
              id="fullname"
              autoComplete="fullname"
              required
            />
            <CustomeInputs
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
            <CustomeInputs
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
            />
            <CustomeButton title="Sign in" />
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-center">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline dark:text-primary"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterCard;
