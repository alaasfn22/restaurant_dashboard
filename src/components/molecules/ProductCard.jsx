/* eslint-disable react/prop-types */
const ProductCard = ({...props}) => {
  return (
    <div className="border cursor-pointer border-gray-200 hover:border-primary group  p-2 py-4 rounded-lg flex flex-col items-center">
      <div className=" border-b w-full  h-32 p-4 flex items-center justify-center overflow-hidden">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-full  object-contain hover:scale-125  transition-all duration-300"
        />
      </div>
      <div className="py-2 w-full px-1 font-semibold">
        <h3 className="text-lg dark:text-white">{props.name}</h3>
        <h3 className="text-gray-400">${props.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
