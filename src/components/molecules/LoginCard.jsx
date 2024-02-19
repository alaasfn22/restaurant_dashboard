/* eslint-disable react/prop-types */
import CustomeInputs from "../atoms/CustomeInputs";
import {Link} from "react-router-dom";
import CustomeButton from "../atoms/CustomeButton";
import {customeContainer} from "../../utils/Toastify";
import Login_Hook from "../../hook/Login_Hook";

const LoginCard = ({t}) => {
  const [inputValue, handleChange, handleSubmit, isLoading] = Login_Hook(t);

  return (
    <>
      {/* This is an example component */}
      <div className="w-full max-w-lg   mx-auto">
        {customeContainer()}
        <div className=" w-full p-4 sm:p-6 lg:p-8 ">
          <form className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              {t("login")}
            </h3>
            <CustomeInputs
              type="email"
              placeholder={t("enter your email")}
              name={"email"}
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
              name={"password"}
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={inputValue.password}
              required
              t={t}
            />
            <div className="flex items-center justify-between">
              <CustomeButton
                t={t}
                title={isLoading ? "loading......." : "sign in"}
                onClick={handleSubmit}
              />
            </div>
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
