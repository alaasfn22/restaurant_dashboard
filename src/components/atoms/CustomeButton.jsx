/* eslint-disable react/prop-types */
const CustomeButton = ({title, onClick, t}) => {
  return (
    <button
      className=" w-full text-white  bg-primary hover:bg-orange-400 focus:ring-2 focus:ring-primary font-semibold rounded-3xl text-md px-5 py-2.5 text-center "
      onClick={onClick}
    >
      {t(title)}
    </button>
  );
};

export default CustomeButton;
