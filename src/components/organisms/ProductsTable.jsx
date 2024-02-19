/* eslint-disable react/prop-types */

import DataTable from "react-data-table-component";
import Product_Table_Hook from "../../hook/Product_Table_Hook";

const ProductsTable = ({data, isLoading}) => {
  const [productData, subHeaderComponentMemo, columns, theme, customStyles, t] =
    Product_Table_Hook(data, isLoading);
  return (
    <div className=" overflow-hidden p-2">
      <DataTable
        columns={columns}
        data={productData && productData}
        progressPending={isLoading}
        pagination
        paginationPerPage={8}
        subHeader
        pointerOnHover
        persistTableHead
        noDataComponent={<p>{t("no data")}</p>}
        responsive
        fixedHeaderScrollHeight="400px"
        highlightOnHover={true}
        customStyles={customStyles}
        theme={theme === "dark" ? "solarized" : ""}
        subHeaderComponent={subHeaderComponentMemo}
        subHeaderAlign="left"
      />
    </div>
  );
};

export default ProductsTable;
