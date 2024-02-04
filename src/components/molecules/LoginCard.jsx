/* eslint-disable react/prop-types */
import {useState} from "react";
import CustomeInputs from "../atoms/CustomeInputs";
import CustomeButton from "../atoms/customeButton";
import {Link} from "react-router-dom";

const LoginCard = ({t}) => {
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
              {t("login")}
            </h3>
            <CustomeInputs
              type="email"
              placeholder={t("enter your email")}
              name={t("email")}
              id="email"
              autoComplete="email"
              onChange={handleChange}
              value={inputValue.email}
              required
              t={t}
            />
            <CustomeInputs
              type="password"
              placeholder={t("enter your password")}
              name={t("password")}
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={inputValue.password}
              required
              t={t}
            />
            <CustomeButton t={t} title="sign in" />
            <div className="text-sm font-medium mt-4 capitalize text-gray-500 dark:text-gray-300 flex justify-center ">
              {t("dont have an account ?")}{" "}
              <Link
                to="/register"
                className="text-primary mx-1 hover:underline dark:text-primary"
              >
                {t("create account")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
