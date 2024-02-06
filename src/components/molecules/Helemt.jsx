/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";

const Helemt = ({...props}) => {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      <h4 className="text-xl font-medium dark:text-white capitalize">
        {props.t(props.page)}
      </h4>
      <ol className="hidden md:flex items-center whitespace-nowrap min-w-0 gap-2">
        <li className="text-sm">
          <Link
            className="flex items-center gap-2 align-middle capitalize dark:text-white transition-all leading-none hover:text-primary dark:hover:text-primary"
            to={props.path}
          >
            {props.t(props.firstName)}
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
              data-lucide="chevron-right"
              className="lucide lucide-chevron-right w-4 h-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </li>
        <li className="text-sm font-medium text-primary capitalize  leading-none hover:text-orange-500">
          {props.t(props.page)}
        </li>
      </ol>
    </div>
  );
};

export default Helemt;
