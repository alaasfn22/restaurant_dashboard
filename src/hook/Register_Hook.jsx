import {useEffect, useState} from "react";
import {CustomeToast} from "../utils/Toastify";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../store/slice/AuthSlice";

const Register_Hook = (t) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValue({...inputValue, [name]: value});
  };
  const userData = {
    name: inputValue.name,
    email: inputValue.email,
    password: inputValue.password,
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.name) {
      CustomeToast("warn", t("enter your name"));
      return;
    } else if (!inputValue.email) {
      CustomeToast("warn", t("enter your email"));
      return;
    } else if (!inputValue.password) {
      CustomeToast("warn", t("enter your password"));
      return;
    } else await dispatch(register(userData));
    setInputValue({
      name: "",
      email: "",
      password: "",
    });
  };

  const {addUser, isLoading, error} = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoading === false) {
      if (addUser?.status === true) {
        if (addUser?.message === "Register Successfully") {
          CustomeToast("success", t(addUser?.message));
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } else if (error?.status === 500) {
        CustomeToast("error", t("This email is already exist"));
      }
    }
  }, [isLoading]);
  return [inputValue, handleChange, handleSubmit, isLoading];
};

export default Register_Hook;
