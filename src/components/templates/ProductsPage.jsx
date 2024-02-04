import {useContextAPi} from "../../utils/ContextApi";
import ProductsTable from "../organisms/ProductsTable";
import CustomeButton from "../atoms/CustomeButton";

const ProductsPage = () => {
  const {t} = useContextAPi();
  return (
    <div className="border border-default-200 rounded-lg py-2">
      <div className="flex justify-between items-center py-2 px-4">
        <h1 className="text-xl font-semibold dark:text-white capitalize">
          {t("products list")}
        </h1>
        <div>
          <CustomeButton t={t} title="add product" />
        </div>
      </div>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
