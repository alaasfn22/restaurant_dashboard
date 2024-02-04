/* eslint-disable react/prop-types */
import {cartData} from "../../utils/data";
import CustomeButton from "../atoms/CustomeButton";
import CustomeOpcityBtn from "../atoms/CustomeOpcityBtn";
import CartCard from "../molecules/CartCard";
import CheckoutBaner from "../molecules/CheckoutBaner";

const CheckoutCard = ({t}) => {
  return (
    <div className="p-6 border capitalize rounded-lg dark:text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{t("your balance")}</h2>
        <CheckoutBaner t={t} />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{t("your address")}</h2>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="map-pin"
              className="lucide lucide-map-pin h-5 w-5 inline align-middle text-primary"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx={12} cy={10} r={3} />
            </svg>{" "}
            47, {t("Cairo Street")}
          </h3>
          <button className="border border-primary text-primary text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-primary hover:text-white">
            {t("change")}
          </button>
        </div>
      </div>
      <div className="">
        <h3 className="text-xl font-semibold">{t("order summary")}</h3>
        <div className="">
          <div className="my-6 border-b border-default-200 flex flex-col gap-4">
            {cartData.map((item) => (
              <CartCard
                key={item.id}
                cartTitle={item.name}
                cartImg={item.img}
                cartPrice={item.price}
                cartCount={item.qty}
              />
            ))}
          </div>
          <div className="py-6">
            <div className="flex items-center justify-between py-3">
              <h6 className="text-base  font-medium">{t("service")} :</h6>
              <h6 className="text-base  font-medium">+$1.00</h6>
            </div>
            <div className="flex items-center justify-between py-3">
              <h6 className="text-base font-medium">{t("total")} :</h6>
              <h4 className="text-xl text-primary font-semibold">$17.08</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <CustomeButton t={t} title="checkout" />
          <CustomeOpcityBtn t={t} title="have a coupon code?" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
