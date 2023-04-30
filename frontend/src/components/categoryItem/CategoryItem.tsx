import { Link } from "react-router-dom";
import { CategoryProp } from "../../@types";
import css from "./CategoryItem.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { title } from "../../features/categorySlice";

export const CategoryItem = ({ text, icon, endpoint }: CategoryProp) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(title(text));
  };

  return (
    <div onClick={onClick}>
      <Link className={css.square} to={`/home/${endpoint}`}>
        <div className={css.icon}>{icon}</div>
        <div className={css.text}>{text}</div>
      </Link>
    </div>
  );
};
