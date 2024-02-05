import {Link} from "react-router-dom";

/* eslint-disable react/prop-types */
const CustomeButton = ({title, t, ...props}) => {
  return (
    <Link
      to={props.path}
      {...props}
      className=" w-full text-white capitalize  bg-primary hover:bg-orange-400 focus:ring-2 focus:ring-primary font-semibold rounded-3xl text-md px-5 py-2.5 text-center "
    >
      <span>{t(title)}</span>
    </Link>
  );
};

export default CustomeButton;
