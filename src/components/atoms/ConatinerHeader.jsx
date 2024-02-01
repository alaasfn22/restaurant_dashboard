/* eslint-disable react/prop-types */
const ConatinerHeader = ({containerTitle, path}) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold dark:text-white">
        {containerTitle}
      </h3>
      {path && (
        <div className="text-primary text-lg cursor-pointer">
          <p className="flex justify-center items-center gap-1">
            View all <span className="text-xl">{">"}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ConatinerHeader;
