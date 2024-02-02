/* eslint-disable react/prop-types */
const CustomeOpcityBtn = ({...props}) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 rounded-full border border-primary px-10 py-4 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white">
        {props.title}
      </div>
    </div>
  );
};

export default CustomeOpcityBtn;
