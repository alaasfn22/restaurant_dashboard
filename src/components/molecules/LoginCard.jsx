import {useState} from "react";
import CustomeInputs from "../atoms/CustomeInputs";
import CustomeButton from "../atoms/customeButton";
import {Link} from "react-router-dom";

const LoginCard = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValue({...inputValue, [name]: value});
  };
  return (
    <>
      {/* This is an example component */}
      <div className="w-full max-w-lg   mx-auto">
        <div className=" w-full p-4 sm:p-6 lg:p-8 ">
          <form className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Login
            </h3>
            <CustomeInputs
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              autoComplete="email"
              onChange={handleChange}
              value={inputValue.email}
              required
            />
            <CustomeInputs
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={inputValue.password}
              required
            />
            <CustomeButton title="Sign in" />
            <div className="text-sm font-medium mt-4 text-gray-500 dark:text-gray-300 flex justify-center ">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-primary hover:underline dark:text-primary"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
