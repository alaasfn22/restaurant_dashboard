/* eslint-disable react/prop-types */
const ProductCard = ({...props}) => {
  return (
    <div className="border border-gray-200 hover:border-primary  p-2 py-4 rounded-lg flex flex-col items-center">
      <div className=" border-b w-full h-32 p-2 flex items-center justify-center overflow-hidden">
        <img src={props.img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="py-2 w-full px-1 font-semibold">
        <h3 className="text-lg dark:text-white">{props.name}</h3>
        <h3 className="text-gray-400">${props.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
