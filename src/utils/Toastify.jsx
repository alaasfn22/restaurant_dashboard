/* eslint-disable react-refresh/only-export-components */
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CustomeToast = (type, message) => {
  if (type === "warn") {
    toast.warn(message);
  } else if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else return null;
};
export const customeContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
    />
  );
};
