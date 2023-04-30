import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import Card from "../card/Card";
import { DbItem } from "../../@types";

const SpecificCategory = () => {
  const url = "http://localhost:8080/api/products";
  const [products, setProducts] = useState<DbItem[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data as DbItem[]));
  },[url]);

  const title = useAppSelector((state) => state.category.category);
  const arr = products.filter((a) => a.category === title);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {arr.map((a) => (
        <Card key={a._id} {...a} />
      ))}
    </div>
  );
};

export default SpecificCategory;
