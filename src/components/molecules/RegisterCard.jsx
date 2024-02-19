/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import CustomeInputs from "../atoms/CustomeInputs";
import CustomeButton from "../atoms/CustomeButton";
import {customeContainer} from "../../utils/Toastify";
import Register_Hook from "../../hook/Register_Hook";

const RegisterCard = ({t}) => {
  const [inputValue, handleChange, handleSubmit, isLoading] = Register_Hook(t);

  return (
    <>
      <div className="w-full max-w-lg   mx-auto">
        {customeContainer()}
        <div className=" w-full p-4 sm:p-6 lg:p-8 ">
          <form className="space-y-6">
            <h3 className="text-xl text-center capitalize font-medium text-gray-900 dark:text-white">
              {t("register")}
            </h3>
            <CustomeInputs
              type="text"
              placeholder={t("enter your name")}
              name={t("name")}
              value={inputValue.name}
              onChange={handleChange}
              id="fullname"
              autoComplete
              required
              t={t}
            />
            <CustomeInputs
              type="email"
              placeholder={t("enter your email")}
              name={t("email")}
              value={inputValue.email}
              onChange={handleChange}
              id="email"
              autoComplete="email"
              required
              t={t}
            />
            <CustomeInputs
              type="password"
              placeholder={t("enter your password")}
              name={t("password")}
              value={inputValue.password}
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
              required
              t={t}
            />{" "}
            <div className="flex justify-center itcems-center">
              <CustomeButton
                t={t}
                title={isLoading ? "loading..." : t("create account")}
                onClick={handleSubmit}
              />
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-center">
              {t("already have an account ?")}{" "}
              <Link
                to="/login"
                className="text-primary mx-1 capitalize hover:underline dark:text-primary"
              >
                {t("login")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterCard;
