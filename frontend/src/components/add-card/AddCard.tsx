import { useState } from "react";
import { CategoryArr, Status, categoryArr } from "../../services/Arrays";
import { DbItem } from "../../@types";
import css from "./AddCard.module.scss";
import validator from "validator";
import { phoneRegex } from "../../services/regex";

const AddCard = () => {
  const grayBackGround = "https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const [productName, setProduct] = useState("");
  const [categoryV, setCategory] = useState("");
  const [statusV, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [base64, setBase64] = useState(grayBackGround);

  const [productError, setProductError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [statusError, setStatusError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [numberError, setNumberError] = useState("");

  // Changes Functions
  const productChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(e.currentTarget.value);
    if (!validator.isLength(e.currentTarget.value, { min: 2 })) {
      setProductError("שם המוצר חייב להכיל לפחות 2 תווים");
    } else {
      setProductError("");
    }
  };

  const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setCategory(value);
    if (!categoryArr.includes(value)) {
      setCategoryError("חייב לבחור ערך");
    } else {
      setCategoryError("");
    }
  };

  const statusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setStatus(value);
    if (!Status.includes(value)) {
      setStatusError("חייב לבחור ערך");
    } else {
      setStatusError("");
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const base64String = (reader.result as string).replace("data:", "").replace(/^.+,/, "");
          setBase64(base64String);
          setBase64(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const descriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
    if (!validator.isLength(e.currentTarget.value, { min: 3 })) {
      setDescriptionError("לפחות 3 תווים");
    } else {
      setDescriptionError("");
    }
  };

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    if (!validator.isLength(e.currentTarget.value, { min: 2 })) {
      setNameError("שם חייב להכיל לפחות 2 תווים");
    } else {
      setNameError("");
    }
  };

  const cityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
    if (!validator.isLength(e.currentTarget.value, { min: 2 })) {
      setCityError("עיר חייב להכיל לפחות 2 תווים");
    } else {
      setCityError("");
    }
  };

  const numberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setNumber(value);
    if (!validator.isLength(value, { min: 9 }) || !value.match(phoneRegex)) {
      setNumberError("מספר לא תקין");
    } else {
      setNumberError("");
    }
  };

  // Submit
  const handleSubmit = () => {
    if (productName.length < 2 || categoryV === "" || statusV === "" || name.length < 2 || city.length < 2 || number.length < 9) {
      console.log("טעות");
    } else {
      const card: DbItem = { productName, category: categoryV, status: statusV, price, img: base64, description, name, city, number, isFave: false, _id: "1" };

      const url = "http://localhost:8080/api/products/addProduct";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      }).then((res) => {
        setProduct("");
        setDescription("");
        setCategory("");
        setStatus("");
        setPrice(0);
        setBase64(grayBackGround);
        setName("");
        setCity("");
        setNumber("");
      });
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">קצת פרטים על המוצר ואנחנו שם...</h2>
      <form className={`p-5 rounded-3 mx-auto shadow d-flex flex-column align-items-center ${css.form}`} /*onSubmit={handleSubmit}*/>
        <h4>פרטי המוצר:</h4>
        <div className="row d-flex mt-2 mb-5">
          <div className="col-6 d-flex flex-column">
            <label>שם המוצר:</label>
            <input className="mb-2" name="Product" value={productName} onChange={productChange} type="text" />
            {productError && <div>* {productError}</div>}

            <label>קטגוריה:</label>
            <select className="mb-2" value={categoryV} onChange={categoryChange}>
              <option value="">בחר...</option>
              {CategoryArr.map((category) => (
                <option value={category.text} key={category.endpoint}>
                  {category.text}
                </option>
              ))}
            </select>
            {categoryError && <div>* {categoryError}</div>}

            <label>מצב:</label>
            <select className="mb-2" value={statusV} onChange={statusChange}>
              <option value="">בחר...</option>
              {Status.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
            {statusError && <div>* {statusError}</div>}

            <label>מחיר:</label>
            <input className="mb-2" value={price} onChange={(e) => setPrice(+e.currentTarget.value)} type="number" placeholder="price" />

            <label>הוסף תמונה:</label>
            <input className="mb-2" type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />

            <textarea placeholder="זה המקום לפרט עוד קצת על המוצר..." className={`${css.textArea}`} value={description} onChange={descriptionChange}>
              {description}
            </textarea>
            {descriptionError && <div>* {descriptionError}</div>}
          </div>

          <div className="col-6">
            <img className={`mx-auto ${css.img}`} src={base64} alt="תמונת מוצר" />
          </div>
        </div>

        <h4>פרטי המוכר:</h4>
        <div className="d-sm-flex gap-3 justify-content-between mt-2 mb-5">
          <div>
            <div className="d-flex">
              <label className="ps-1">שם:</label>
              <input value={name} onChange={nameChange} type="text" />
            </div>
            {nameError && <div className="text-start">* {nameError}</div>}
          </div>

          <div>
            <div className="d-flex">
              <label className="ps-1">עיר:</label>
              <input value={city} onChange={cityChange} type="text" />
            </div>
            {cityError && <div className="text-start">* {cityError}</div>}
          </div>

          <div>
            <div className="d-flex">
              <label className="ps-1">נייד:</label>
              <input value={number} onChange={numberChange} type="text" />
            </div>
            {numberError && <div className="text-start">* {numberError}</div>}
          </div>
        </div>
        <input type="button" value="Save" onClick={handleSubmit} />
        {/* <input type="submit" value="Save" /> */}
      </form>
    </div>
  );
};

export default AddCard;
