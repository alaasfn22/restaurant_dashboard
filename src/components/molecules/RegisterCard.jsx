/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import CustomeInputs from "../atoms/CustomeInputs";
import CustomeButton from "../atoms/CustomeButton";

const RegisterCard = ({t}) => {
  return (
    <>
      {/* This is an example component */}
      <div className="w-full max-w-lg   mx-auto">
        <div className=" w-full p-4 sm:p-6 lg:p-8 ">
          <form className="space-y-6">
            <h3 className="text-xl text-center capitalize font-medium text-gray-900 dark:text-white">
              {t("register")}
            </h3>
            <CustomeInputs
              type="text"
              placeholder={t("enter your name")}
              name={t("full name")}
              id="fullname"
              autoComplete
              required
              t={t}
            />
            <CustomeInputs
              type="email"
              placeholder={t("enter your email")}
              name={t("email")}
              id="email"
              autoComplete="email"
              required
              t={t}
            />
            <CustomeInputs
              type="password"
              placeholder={t("enter your password")}
              name={t("password")}
              id="password"
              autoComplete="current-password"
              required
              t={t}
            />{" "}
            <div className="flex justify-center itcems-center">
              <CustomeButton t={t} title="create account" />
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
