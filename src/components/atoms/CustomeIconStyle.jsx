/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const CustomeIconStyle = ({icon, ...props}) => {
  return (
    <span
      {...props}
      className="w-8 h-8 cursor-pointer rounded-full text-gray-700 bg-customeGray dark:bg-gray-800 p-1 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
    >
      <span className="flex items-center justify-center w-full h-full">
        {icon}
      </span>
    </span>
  );
};

export default CustomeIconStyle;
