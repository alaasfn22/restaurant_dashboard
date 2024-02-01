import {categoryData, productData} from "../../utils/data";
import CategoryCard from "../atoms/CategoryCard";
import ConatinerHeader from "../atoms/ConatinerHeader";
import AnalyticsCard from "../molecules/AnalyticsCard";
import BanerCard from "../molecules/BanerCard";
import ProductCard from "../molecules/ProductCard";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3  ">
      <div className="lg:col-span-2 flex flex-col gap-8 p-2">
        <div className="">
          <BanerCard />
        </div>
        <ConatinerHeader containerTitle="Analytics Overview" />
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          <AnalyticsCard />
          <AnalyticsCard />
          <AnalyticsCard />
          <AnalyticsCard />
        </div>
        <ConatinerHeader containerTitle="Category" path="path" />

        <div className=" grid grid-cols-3 lg:grid-cols-6   gap-4">
          {categoryData.map((item, index) => {
            return (
              <CategoryCard key={index} image={item.img} catname={item.name} />
            );
          })}
        </div>
        <ConatinerHeader containerTitle="Products" path="path" />
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          {productData.map((item, index) => {
            return <ProductCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
