import {IoLocationOutline} from "react-icons/io5";
import ProductsTable from "./ProductsTable";
import Restaurant_Details_Hook from "../../hook/Restaurant_Details_Hook";
import Loadear from "../../utils/Loadear";

const ViewRestDetailsModal = () => {
  const [t, restaurantDetails, isLoading, data] = Restaurant_Details_Hook();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full my-8">
        <Loadear />
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-6 w-full bg-white dark:bg-dark ">
      <div className="relative overflow-y-auto   flex-auto max-h-[420px]">
        {restaurantDetails.data && (
          <div className="relative p-4 py-6 rounded-lg border border-default-200 shadow">
            <img
              src={restaurantDetails?.data?.image}
              alt="restaurant image"
              className="h-14 w-14 mx-auto mb-2"
            />

            <h4 className="text-base font-medium text-center text-gray-800 dark:text-white mb-10">
              {restaurantDetails?.data?.name}
            </h4>
            <div className="flex justify-around capitalize mb-4">
              <div className="text-center">
                <h4 className="text-lg font-medium text-primary mb-2">12</h4>
                <h5 className="text-sm text-gray-800 dark:text-white">
                  {t("total product")}
                </h5>
              </div>
              <div className="border-s border-default-200" />
              <div className="text-center">
                <h4 className="text-lg font-medium text-primary mb-2">1.2k</h4>
                <h5 className="text-sm text-gray-800 dark:text-white">
                  {t("total sales")}
                </h5>
              </div>
            </div>
            <div className="space-y-5 mb-2 text-gray-700 dark:text-white">
              <div className="flex justify-center gap-3 ">
                <span className=" font-bold text-xl inline-flex justify-center  ">
                  <IoLocationOutline />
                </span>
                <p className="text-sm dark:text-white line-clamp-2 ">
                  {restaurantDetails?.data?.address}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border border-default-200 rounded-lg py-2 ">
        <ProductsTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ViewRestDetailsModal;
