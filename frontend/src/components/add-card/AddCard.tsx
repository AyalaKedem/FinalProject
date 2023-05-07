import { useState } from "react";
import { CategoryArr, Status } from "../../services/Arrays";
import { DbItem } from "../../@types";

const AddCard = () => {
  const [productName, setProduct] = useState("");
  const [categoryV, setCategory] = useState("");
  const [statusV, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  //   const [img, setImg] = useState<File | string>('');
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    const card: DbItem = { productName, category: categoryV, status: statusV, price, img, description, name, city, number, isFave: false, _id: "1" };

    const url = "http://localhost:8080/api/products/addProduct";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => {
        console.log(res);
        console.log(card);
        setProduct("");
        setDescription("");
        setCategory("");
        setStatus("");
        setPrice(0);
        setImg("");
        setName("");
        setCity("");
        setNumber("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form className="p-5 d-flex flex-column justify-content-end">
        <input value={productName} onChange={(e) => setProduct(e.currentTarget.value)} type="text" placeholder="productName" />

        <select value={categoryV} onChange={(e) => setCategory(e.currentTarget.value)}>
          <option value="">בחר...</option>
          {CategoryArr.map((category) => (
            <option value={category.endpoint} key={category.endpoint}>
              {category.text}
            </option>
          ))}
        </select>

        <select value={statusV} onChange={(e) => setStatus(e.currentTarget.value)}>
          <option value="">בחר...</option>
          {Status.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>

        <input value={price} onChange={(e) => setPrice(+e.currentTarget.value)} type="number" placeholder="price" />

        {/* <input type="file" accept=".jpg,.jpeg,.png" value={img} onChange={(e) => e.currentTarget.value} /> */}

        <textarea placeholder="זה המקום לפרט עוד קצת על המוצר..." value={description} onChange={(e) => setDescription(e.currentTarget.value)}>
          {description}
        </textarea>

        <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" placeholder="name" />
        <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="city" />
        <input value={number} onChange={(e) => setNumber(e.currentTarget.value)} type="text" placeholder="number" />
        <input type="button" value="Save" onClick={handleSubmit} />
        {/* <button type="submit" onClick={()=>{console.log('pressed'); */}
        {/* }}>Save</button> */}
      </form>
    </div>
  );
};

export default AddCard;
