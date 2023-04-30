import { CategoryArr, Status } from "../../services/Arrays";

const AddCard = () => {
  return (
    <div className="w-50 mx-auto bg-white d-sm-flex justify-content-center align-items-center rounded-2">
      <form className="p-5 d-flex flex-column justify-content-end" action="">
        <h5>פרטי המוצר:</h5>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-2 align-items-center">
            <label htmlFor="productName">שם המוצר:</label>
            <input type="text" name="productName" id="productName" />
          </div>
          <div className="d-flex align-items-center">
            <label htmlFor="select1"></label>
            קטגוריית מוצר:
            <select className="me-2" name="select1">
              <option value="">בחר...</option>
              {CategoryArr.map((category) => (
                <option value={category.endpoint}>{category.text}</option>
              ))}
            </select>
          </div>
          <div className="d-flex align-items-center">
            <label htmlFor="select2">
              מצב:
              <select className="me-2" name="select2">
                <option value="">בחר...</option>
                {Status.map((status) => (
                  <option value={status}>{status}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="img">
              הוסף תמונה:
              <input className="me-2" type="file" name="img" accept=".jpg,.jpeg,.png" />
            </label>
          </div>
        </div>

        <h5 className="pt-5">פרטי המוכר:</h5>
        <div className="d-flex gap-3">
          <label htmlFor="name">
            שם:
            <input className="me-2" type="text" name="name" id="name" />
          </label>

          <label htmlFor="city">
            עיר:
            <input className="me-2" type="text" name="city" id="city" />
          </label>

          <label htmlFor="cell">
            נייד:
            <input className="me-2" type="text" name="cell" id="cell" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
