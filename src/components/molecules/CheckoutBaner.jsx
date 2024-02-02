/* eslint-disable react/prop-types */
const CheckoutBaner = ({t}) => {
  return (
    <div className="bg-no-repeat bg-cover capitalize bg-[url(.../../../../assets/offer-bg-fec3ece8.png)] bg-primary/10 rounded-lg">
      <div className="py-6 px-8">
        <div className="flex sm:flex-row flex-col items-center gap-6">
          <div className="sm:w-1/2 w-full flex items-center gap-6">
            <div>
              <span className="inline-flex items-center justify-center h-14 w-14 bg-primary-200 text-primary shadow-md rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="hard-drive-download"
                  className="lucide lucide-hard-drive-download h-8 w-8"
                >
                  <path d="M12 2v8" />
                  <path d="m16 6-4 4-4-4" />
                  <rect width={20} height={8} x={2} y={14} rx={2} />
                  <path d="M6 18h.01" />
                  <path d="M10 18h.01" />
                </svg>
              </span>
              <p className=" mt-1.5">{t("top up")}</p>
            </div>
            <div>
              <span className="inline-flex items-center justify-center h-14 w-14 bg-primary-200 text-primary shadow-md rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="hard-drive-upload"
                  className="lucide lucide-hard-drive-upload h-8 w-8"
                >
                  <path d="m16 6-4-4-4 4" />
                  <path d="M12 2v8" />
                  <rect width={20} height={8} x={2} y={14} rx={2} />
                  <path d="M6 18h.01" />
                  <path d="M10 18h.01" />
                </svg>
              </span>
              <p className="text-default-600 mt-1.5">{t("transfer")}</p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full">
            <div className="bg-primary rounded-lg">
              <div className="p-4">
                <h6 className="text-lg font-medium text-default-100 mb-1">
                  {t("balance")}
                </h6>
                <h1 className="text-2xl font-bold text-white">$12.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBaner;
