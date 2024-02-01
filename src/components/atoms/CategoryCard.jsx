/* eslint-disable react/prop-types */
const CategoryCard = ({image, catname}) => {
  return (
    <div className="flex flex-col items-center justify-center  p-2 gap-3 overflow-hidden cursor-pointer group">
      <img src={image} alt="catImg" className="w-12 h-12 object-contain " />
      <h3 className="text-gray-500 capitalize text-lg group-hover:text-primary">
        {catname}
      </h3>
    </div>
  );
};

export default CategoryCard;
