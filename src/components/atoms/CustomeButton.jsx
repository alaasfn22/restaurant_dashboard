/* eslint-disable react/prop-types */
const CustomeButton = ({title, onClick}) => {
  return (
    <button
      className=" w-full text-white  bg-primary hover:bg-orange-400 focus:ring-2 focus:ring-primary font-semibold rounded-3xl text-md px-5 py-2.5 text-center "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
