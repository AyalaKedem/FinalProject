export type StatusType = "חדש" | "כמו חדש" | "מצב טוב" | "משומש" | "דרוש תיקון";

export type DbItem = {
  _id?: string;
  productName: string;
  description: string;
  category: string;
  status: string;
  price: number;
  img: string;
  name: string;
  city: string;
  number: string;
  isFave:boolean;
};

export type CategoryProp = {
  text: string;
  icon: JSX.Element;
  endpoint: string;
};

export type initialStateCategory = {
  category: string;
};

// export type InitialStateDb = {
//   db: DbItem[];
// }

type CustomInputProps = {
  className: string;
  validate: any;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: "text";
};

type ExtendedInputProps = CustomInputProps & InputHTMLAttributes<HTMLInputElement>;

