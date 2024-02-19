import ProductsTable from "../organisms/ProductsTable";
import CustomeButton from "../atoms/CustomeButton";
import {Outlet} from "react-router-dom";
import Helemt from "../molecules/Helemt";
import Products_Hook from "../../hook/Products_Hook";

const ProductsPage = () => {
  const [t, isLoading, data] = Products_Hook();

  return (
    <>
      <Helemt t={t} page="products page" firstName="home page" path="/" />

      <div className="border border-default-200 rounded-lg py-2">
        <div className="flex justify-between items-center py-2 px-4">
          <h1 className="text-xl font-semibold dark:text-white capitalize">
            {t("products list")}
          </h1>
          <div>
            <CustomeButton
              t={t}
              title="add product"
              path="/products/add-product"
            />
          </div>
        </div>
        <ProductsTable data={data} isLoading={isLoading} />
        <Outlet />
      </div>
    </>
  );
};

export default ProductsPage;
