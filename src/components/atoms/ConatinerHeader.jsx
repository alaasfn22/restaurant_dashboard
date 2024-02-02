import {useContextAPi} from "../../utils/ContextApi";

/* eslint-disable react/prop-types */
const ConatinerHeader = ({containerTitle, path}) => {
  const {t} = useContextAPi();
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-lg capitalize font-semibold dark:text-white">
        {t(containerTitle)}
      </h3>
      {path && (
        <div className="text-primary text-lg capitalize cursor-pointer">
          <p className="flex justify-center items-center gap-1">
            {t("view all")}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConatinerHeader;
