/* eslint-disable react/jsx-no-duplicate-props */
import DataTable, {createTheme} from "react-data-table-component";
import {useContextAPi} from "../../utils/ContextApi";
import CustomeInputs from "../atoms/CustomeInputs";
import {useMemo, useState} from "react";
import {productData} from "../../utils/data";

const ProductsTable = () => {
  const {theme, language, t} = useContextAPi();
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "10px", // override the cell padding for head cells
        paddingRight: "10px",
        backgroundColor: theme === "dark" ? "#0F172A" : "#F1F5F9",
        fontSize: "16px",
        textTransform: "capitalize",
      },
    },
    cells: {
      style: {
        paddingLeft: "10px", // override the cell padding for data cells
        paddingRight: "10px",
        fontSize: "15px",
        fontWeight: "500",
        fontColor: "#64748B",
      },
    },
  };
  createTheme(
    "solarized",
    {
      text: {
        primary: "#fff",
        secondary: "#64748B",
      },
      background: {
        default: "#020617",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#eee",
      },
      button: {
        default: "#2aa198",
        hover: "rgba(0,0,0,.08)",
        focus: "rgba(255,255,255,.12)",
        disabled: "rgba(255, 255, 255, .34)",
      },
      sortFocus: {
        default: "#2aa198",
      },
    },
    "dark"
  );
  const columns = [
    {
      name: `${language === "ar" ? "الاسم" : "Name"}`,
      selector: (row) => (
        <div className="flex items-center gap-2">
          <img src={row.img} alt="" className="w-10 h-10  object-cover" />
          {row.name}
        </div>
      ),
      sortable: true,
    },
    {
      name: `${language === "ar" ? "النوع" : "Type"}`,
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: `${language === "ar" ? "الكمية" : "Quantity"}`,
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: `${language === "ar" ? "السعر" : "Price"}`,
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: `${language === "ar" ? "تم الاضافة بواسطة" : "Created By"}`,
      selector: (row) => t(row.createBy),
      sortable: true,
    },
  ];

  const [filterText, setFilterText] = useState("");
  const filteredItems = productData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="pb-4 w-full sm:w-64">
        <CustomeInputs
          id="search"
          type="text"
          placeholder="Filter By Name"
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  return (
    <div className=" overflow-hidden p-2">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationPerPage={8}
        subHeader
        pointerOnHover
        persistTableHead
        noDataComponent="No Product Found"
        responsive
        fixedHeaderScrollHeight="400px"
        highlightOnHover={true}
        customStyles={customStyles}
        theme={theme === "dark" ? "solarized" : ""}
        subHeaderComponent={subHeaderComponentMemo}
      />
    </div>
  );
};

export default ProductsTable;
