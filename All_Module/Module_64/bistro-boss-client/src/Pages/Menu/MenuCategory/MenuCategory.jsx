/* eslint-disable react/prop-types */
import Cover from "../../Shared/Cover/Cover";
import MeniItem from "../../Shared/MenuItem/MeniItem";

const MenuCategory = ({items, title, img}) => {
  return (
    <div className="pt-8">
        {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MeniItem key={item._id} item={item}></MeniItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
