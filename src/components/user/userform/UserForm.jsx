import { useState } from "react";
import styles from "./styles.module.css";
import { Input } from "../../form";

const { formClass } = styles;
// DRY

const initState = {
  name: "",
  age: "",
  location: "",
  phone: "",
};
const UserForm = ({ addUser }) => {
  const [form, setForm] = useState(initState);

  const inputHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    addUser(form);
    setForm(initState);
  };
  return (
    <div className={formClass}>
      <form onSubmit={formHandler}>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={inputHandler}
        />
        <Input
          type="text"
          name="age"
          value={form.age}
          onChange={inputHandler}
        />
        <Input
          type="text"
          name="phone"
          value={form.phone}
          onChange={inputHandler}
        />
        <Input
          type="text"
          name="location"
          value={form.location}
          onChange={inputHandler}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
