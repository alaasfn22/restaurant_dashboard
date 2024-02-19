import {useEffect, useMemo, useState} from "react";
import {deleteProduct, searchProduct} from "../store/slice/ProductsSlice";
import CustomeInputs from "../components/atoms/CustomeInputs";
import {RiDeleteBin5Line} from "react-icons/ri";
import {IoEyeOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {useContextAPi} from "../utils/ContextApi";
import {useDispatch, useSelector} from "react-redux";
import {CustomeToast} from "../utils/Toastify";
import {createTheme} from "react-data-table-component";

const Product_Table_Hook = (data, isLoading) => {
  const {theme, language, t} = useContextAPi();
  const dispatch = useDispatch();
  const deleteProductById = async (id) => {
    await dispatch(deleteProduct(id));
  };
  const {error} = useSelector((state) => state.products);

  useEffect(() => {
    if (isLoading === false) {
      if (error?.status === 401) {
        CustomeToast("error", error?.data?.message);
      }
    }
  }, [isLoading, error]);

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
        textTransform: "capitalize",
        textAlign: "center",
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
      name: "#",
      selector: (row) => data?.indexOf(row) + 1,
      sortable: true,
    },
    {
      name: `${language === "ar" ? "الاسم" : "Name"}`,
      selector: (row) => (
        <div className="flex items-center gap-2 min-w-[500px] ">
          <img src={row.image} alt="" className="w-10 h-10  object-cover" />
          {row.name}
        </div>
      ),
      sortable: true,
    },

    {
      name: `${language === "ar" ? "الكمية" : "Quantity"}`,
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: `${language === "ar" ? "السعر" : "Price"}`,
      selector: (row) => "$ " + row.price,
      sortable: true,
    },

    {
      name: `${language === "ar" ? "الاجراءت" : "Actions"}`,
      cell: (row) => (
        <div className="flex items-center  gap-2">
          <Link
            to={`/products/product-details?id=${row.id}&&name=${row.name}&&qty=${row.quantity}&&price=${row.price}&&img=${row.image}`}
            className="inline-flex justify-center items-center w-8 h-8 text-2xl hover:scale-125 dark:text-white hover:text-primary dark:hover:text-primary font-semibold"
          >
            <IoEyeOutline />
          </Link>
          <span
            onClick={() => {
              deleteProductById(row.id);
            }}
            className=" inline-flex justify-center items-center w-8 h-8 text-2xl dark:text-white hover:scale-125 hover:text-red-500 dark:hover:text-red-500 font-semibold  "
          >
            <RiDeleteBin5Line />
          </span>
        </div>
      ),
    },
  ];

  const [filterText, setFilterText] = useState("");
  let productData = [];
  if (data) {
    productData = data;
  } else {
    productData = [];
  }

  // const filteredItems = data?.filter(
  //   (item) =>
  //     item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  // );
  const filteredItems = async (e) => {
    setFilterText(e.target.value);
    await dispatch(searchProduct(filterText));
    productData = await data;
  };

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="pb-4 w-full sm:w-64 ">
        <CustomeInputs
          id="search"
          type="text"
          placeholder={t("search by name")}
          autoComplete
          onChange={filteredItems}
          value={filterText}
          t={t}
        />
      </div>
    );
  }, [filterText]);
  return [productData, subHeaderComponentMemo, columns, theme, customStyles, t];
};

export default Product_Table_Hook;
