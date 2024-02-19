import Helemt from "../molecules/Helemt";
import RestaurantCard from "../molecules/RestaurantCard";
import Loadear from "../../utils/Loadear";
import Restaurants_Hook from "../../hook/Restaurants_Hook";

const RestuarantPage = () => {
  const [t, restaurants, isLoading] = Restaurants_Hook();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full my-8">
        <Loadear />
      </div>
    );
  }
  return (
    <>
      <Helemt t={t} page="restuarant page" firstName="home page" path="/" />
      <div className="text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {restaurants.data ? (
            restaurants.data.map((item) => (
              <RestaurantCard key={item.id} t={t} {...item} />
            ))
          ) : (
            <p>{t("Empty Restuarant")}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RestuarantPage;
