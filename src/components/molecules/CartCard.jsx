/* eslint-disable react/prop-types */
const CartCard = ({cartTitle, cartImg, cartPrice, cartCount}) => {
  return (
    <div className="flex items-center justify-between mb-4 dark:text-white">
      <div className="flex items-center gap-4 overflow-hidden">
        <img src={cartImg} className="h-16 w-16 p-2 border rounded-lg " />
        <div className="">
          <a href="product-grid.html" className="text-base font-medium ">
            {cartTitle}
          </a>
          <p className="text-sm font-medium ">x{cartCount}</p>
        </div>
      </div>
      <h3 className="text-base font-medium ">+${cartPrice}</h3>
    </div>
  );
};

export default CartCard;
