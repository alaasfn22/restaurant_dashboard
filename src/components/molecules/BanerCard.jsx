/* eslint-disable react/prop-types */
import offer from "../../assets/offer-bg2-f01b95e8.png";
import CustomeButton from "../atoms/customeButton";
const BanerCard = ({t}) => {
  return (
    <div className="w-full h-72  ">
      <div className="w-full h-full overflow-hidden rounded-2xl relative  ">
        <img
          src={offer}
          alt="offer"
          className="w-full h-full object-left-top    md:object-right-top  object-cover"
        />
        <div className="absolute capitalize top-10 ltr:left-0 rtl:right-0 z-5 px-4 md:px-10  text-white w-full md:w-3/5 flex flex-col gap-3">
          <h3 className="text-xl ">{t("up to")}</h3>
          <h1 className="text-2xl text-primary font-semibold">50% OFF</h1>
          <p className="text-md leading-8">
            {t(
              "Indulge in our mouthwatering burgers and double the delight with our exclusive BOGO deal! "
            )}
          </p>
          <span className="w-40">
            <CustomeButton title={t("order now")} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BanerCard;
