/* eslint-disable no-unused-vars */
import {useContextAPi} from "../../utils/ContextApi";
import {RxDashboard} from "react-icons/rx";

const Home = () => {
  const {open, setOpen} = useContextAPi();

  return (
    <div
      onClick={() => setOpen(true)}
      className="text-3xl font-bold underline "
    >
      Home
      <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-red-600">
        <RxDashboard />
      </span>
    </div>
  );
};

export default Home;
