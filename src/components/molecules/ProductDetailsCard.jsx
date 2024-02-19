/* eslint-disable react/prop-types */
const ProductDetailsCard = ({t, ...props}) => {
  return (
    <div className="mx-auto  w-full h-full  transform overflow-hidden rounded-lg bg-white dark:bg-dark shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <div className="w-full h-40 overflow-hidden ">
        <img
          className="h-full w-full p-4 object-contain object-center"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="p-4 text-center">
        <div>
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {props.name}
          </h2>
        </div>

        <div className="flex justify-center gap-8 items-center">
          <p className=" text-lg font-semibold capitalize text-gray-900 dark:text-white">
            {t("price")}: ${props.price}
          </p>
          <p className="text-lg font-semibold capitalize text-gray-900 dark:text-white">
            {t("quantity")}: {props.qty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
