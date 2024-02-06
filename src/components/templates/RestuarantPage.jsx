import {useContextAPi} from "../../utils/ContextApi";
import Helemt from "../molecules/Helemt";
import RestaurantCard from "../molecules/RestaurantCard";

const RestuarantPage = () => {
  const {t} = useContextAPi();
  return (
    <>
      <Helemt t={t} page="restuarant page" firstName="home page" path="/" />
      <div className="text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
          <RestaurantCard t={t} />
        </div>
      </div>
    </>
  );
};

export default RestuarantPage;
