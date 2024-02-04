/* eslint-disable react/prop-types */

const CustomeInputs = ({t, ...props}) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="text-sm capitalize font-medium text-gray-900 block mb-2 dark:text-gray-300"
      >
        {t(props.name)}
      </label>
      <input
        {...props}
        className="bg-white border placeholder:capitalize border-gray-300 text-gray-900 sm:text-sm rounded-full outline-none focus:ring-2 focus:ring-gray-100  block w-full p-2.5 py-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  "
      />
    </div>
  );
};

export default CustomeInputs;
