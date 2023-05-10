import { useState } from "react";
import { CategoryArr, Status } from "../../services/Arrays";
import { DbItem } from "../../@types";
import css from "./AddCard.module.scss";

const AddCard = () => {
  const [productName, setProduct] = useState("");
  const [categoryV, setCategory] = useState("");
  const [statusV, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [base64, setBase64] = useState("");
  const [previewImg, setPreviewImg] = useState('https://images.pexels.com/photos/2824173/pexels-photo-2824173.jpeg?auto=compress&cs=tinysrgb&w=1600');

  const handleImageChange = (e: any) => {
    const file = e.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const base64String = (reader.result as string).replace("data:", "").replace(/^.+,/, "");
          setBase64(base64String);
          setPreviewImg(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const card: DbItem = { productName, category: categoryV, status: statusV, price, img: base64, description, name, city, number, isFave: false, _id: "1" };

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
        setBase64("");
        setName("");
        setCity("");
        setNumber("");
      })
      .catch((e) => console.log(e));
  };

  // const validationFailed = () => {
  //   const note = 'צריך להכיל 2 תווים לפחות';
  // }

  // const validate = () => {
  //   productName.length < 2 || name.length < 2 || city.length < 2 || number.length < 2 ? validationFailed() : handleSubmit();
  // }

  return (
    <div>
      <h2 className="text-center mb-4">- טופס הוספת מוצר -</h2>
      <form className={`p-5 rounded-3 mx-auto shadow d-flex flex-column align-items-center ${css.form}`}>
        <h4>פרטי המוצר:</h4>
        <div className="row d-flex mt-2 mb-5">
          <div className="col-6 d-flex flex-column">
            <label>שם המוצר:</label>
            <input className="mb-2" value={productName} onChange={(e) => setProduct(e.currentTarget.value)} type="text" />

            <label>קטגוריה:</label>
            <select className="mb-2" value={categoryV} onChange={(e) => setCategory(e.currentTarget.value)}>
              <option value="">בחר...</option>
              {CategoryArr.map((category) => (
                <option value={category.text} key={category.endpoint}>
                  {category.text}
                </option>
              ))}
            </select>

            <label>מצב:</label>
            <select className="mb-2" value={statusV} onChange={(e) => setStatus(e.currentTarget.value)}>
              <option value="">בחר...</option>
              {Status.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>

            <label>מחיר:</label>
            <input className="mb-2" value={price} onChange={(e) => setPrice(+e.currentTarget.value)} type="number" placeholder="price" />

            <label>הוסף תמונה:</label>
            <input className="mb-2" type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />

            <textarea placeholder="זה המקום לפרט עוד קצת על המוצר..." className={`${css.textArea}`} value={description} onChange={(e) => setDescription(e.currentTarget.value)}>
              {description}
            </textarea>
          </div>

          <div className="col-6">
            <img className={`mx-auto ${css.img}`} src={previewImg} alt="תמונת מוצר" />
          </div>          
        </div>       

        <h4>פרטי המוכר:</h4>
        <div className="d-sm-flex gap-3 justify-content-between mt-2 mb-5">
          <div>
            <label className="ps-1">שם:</label>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" />
          </div>

          <div>
            <label className="ps-1">עיר:</label>
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" />
          </div>

          <div>
            <label className="ps-1">נייד:</label>
            <input value={number} onChange={(e) => setNumber(e.currentTarget.value)} type="text" />
          </div>
        </div>
        <input type="button" value="Save" onClick={handleSubmit} />
        {/* <button type="submit" onClick={()=>{console.log('pressed'); */}
        {/* }}>Save</button> */}
      </form>
    </div>
  );
};

export default AddCard;
