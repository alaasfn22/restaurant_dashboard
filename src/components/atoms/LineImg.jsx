import lineimg from "../../assets/download.png";
const LineImg = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/3 start-0 end-0 w-full  ">
      <div className="flex justify-center items-center w-full  overflow-hidden">
        <img
          src={lineimg}
          alt="line image"
          className="w-full opacity-50 flex"
        />
      </div>
    </div>
  );
};

export default LineImg;
