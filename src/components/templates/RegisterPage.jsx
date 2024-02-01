import LineImg from "../atoms/LineImg";
import authimg from "../../assets/auth-bg-d79436e2.png";
import RegisterCard from "../molecules/RegisterCard";

const RegisterPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="  bg-secondary bg-opacity-90 dark:bg-slate-800 w-screen h-screen flex justify-between rtl:flex-row-reverse ">
        <div className="overflow-hidden flex justify-center items-center w-full xl:w-1/2 z-10  ">
          <RegisterCard />
        </div>
        <div className=" hidden xl:w-1/2 xl:block relative z-10    ">
          <img
            src={authimg}
            alt=""
            className=" h-5/6 object-right-top absolute right-0 top-0   "
          />
        </div>
      </div>
      <LineImg />
    </div>
  );
};

export default RegisterPage;
