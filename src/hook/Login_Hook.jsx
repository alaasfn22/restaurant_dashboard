import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import {CustomeToast} from "../utils/Toastify";
import {login} from "../store/slice/AuthSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login_Hook = (t) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValue({...inputValue, [name]: value});
  };
  const userData = {
    email: inputValue.email,
    password: inputValue.password,
  };

  const validation = () => {
    if (!inputValue.email) {
      CustomeToast("warn", t("enter your email"));
      return;
    } else if (!inputValue.password) {
      CustomeToast("warn", t("enter your password"));
      return;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    !validation() && (await dispatch(login(userData)));
  };

  const {user, isLoading, error} = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoading === false) {
      if (user?.message === "Success login") {
        Cookies.set("token", user.token);
        Cookies.set("user", JSON.stringify(user.data));
        CustomeToast("success", t("login successfully."));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (error?.data?.message === "The selected email is invalid.") {
        CustomeToast("error", t("The selected email is invalid."));
        Cookies.remove("token");
        Cookies.remove("user");
      } else if (error?.data?.message === "password error") {
        CustomeToast("error", t("password error"));
        Cookies.remove("token");
        Cookies.remove("user");
      }
    }
  }, [isLoading]);
  return [inputValue, handleChange, handleSubmit, isLoading];
};

export default Login_Hook;
