const AnalyticsCard = () => {
  return (
    <div className="flex flex-col gap-1 items-center border border-gray-300 hover:border-primary rounded-lg p-4 cursor-pointer  ">
      <h3 className="text-2xl font-bold text-primary">12.56K</h3>
      <h3 className="text-lg font-semibold dark:text-white ">Total Orders</h3>
      <h3 className="text-lg  text-gray-400">10% increase</h3>
    </div>
  );
};

export default AnalyticsCard;
