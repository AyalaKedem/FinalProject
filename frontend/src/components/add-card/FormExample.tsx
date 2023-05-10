import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CategoryArr, Status } from "../../services/Arrays";
import { DbItem } from "../../@types";

function FormExample() {
  const [productName, setProduct] = useState("");
  const [categoryV, setCategory] = useState("");
  const [statusV, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  // const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [base64, setBase64] = useState("");
  const [validated, setValidated] = useState(false);

  const handleImageChange = (e: any) => {
    const file = e.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const base64String = (reader.result as string).replace("data:", "").replace(/^.+,/, "");
          setBase64(base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // לבדוק את סוג האיוונט
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    console.log(form);
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // event.preventDefault();
    // event.stopPropagation();

    // if (productName.length >= 2 && name.length >= 2 && city.length >= 2 && number.length >= 2) {
    //   setValidated(true);

      // const card: DbItem = { productName, category: categoryV, status: statusV, price, img: base64, description, name, city, number, isFave: false, _id: "1" };

      // const url = "http://localhost:8080/api/products/addProduct";
      // fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(card),
      // })
      //   .then((res) => {
      //     console.log(res);
      //     // console.log(card);
      //     setProduct("");
      //     setDescription("");
      //     setCategory("");
      //     setStatus("");
      //     setPrice(0);
      //     setBase64("");
      //     setName("");
      //     setCity("");
      //     setNumber("");
      //   })
      //   .catch((e) => console.log(e));
    // } else {
      // console.log('משהו לא נכון');
      
    // }
  };

  return (
    <Form className="w-75 mx-auto" noValidate validated={validated} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>שם המוצר:</Form.Label>
          <Form.Control type="text" value={productName} onChange={(e) => setProduct(e.currentTarget.value)} required />
          <Form.Control.Feedback>נראה טוב!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">חייב להכיל 2 תווים לפחות</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>קטגוריה:</Form.Label>
          <Form.Select value={categoryV} onChange={(e) => setCategory(e.currentTarget.value)} required>
            <option value="">בחר...</option>
            {CategoryArr.map((category) => (
              <option value={category.text} key={category.endpoint}>
                {category.text}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>נראה טוב!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>מצב:</Form.Label>
          <Form.Select value={statusV} onChange={(e) => setStatus(e.currentTarget.value)} required>
            <option value="">בחר...</option>
            {Status.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>נראה טוב!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>מחיר:</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(+e.currentTarget.value)} required />
          <Form.Control.Feedback>נראה טוב!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>צרף תמונה:</Form.Label>
          <Form.Control type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>תאור:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="זה המקום לפרט עוד קצת על המוצר..." value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>שם:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} required />
          <Form.Control.Feedback type="invalid">זוהי שאלת חובה</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>עיר:</Form.Label>
          <Form.Control value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" required />
          <Form.Control.Feedback type="invalid">זוהי שאלת חובה</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>נייד:</Form.Label>
          <Form.Control type="text" value={number} onChange={(e) => setNumber(e.currentTarget.value)} required />
          <Form.Control.Feedback type="invalid">זוהי שאלת חובה</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button onClick={handleSubmit} type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;
