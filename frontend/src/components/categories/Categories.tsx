import { CategoryArr } from "../../services/Arrays";
import { CategoryItem } from "../categoryItem/CategoryItem";
import css from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={`${css.tablet}`}>
      {CategoryArr.map((item) => (
        <CategoryItem key={item.endpoint} text={item.text} icon={item.icon} endpoint={item.endpoint} />
      ))}
    </div>
  );
};

export default Categories;
