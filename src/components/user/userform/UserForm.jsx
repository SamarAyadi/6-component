import { useState } from "react";

import { Button, Input } from "../../form";

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

  const resetHandler = () => {
    setForm(initState);
  }
  return (
    <form onSubmit={formHandler} onReset={resetHandler}>
      <Input
        type="text"
        name="name"
        value={form.name}
        onChange={inputHandler}
      />
      <Input type="text" name="age" value={form.age} onChange={inputHandler} />
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

      <Button >Save</Button>
      <Button type="reset">Reset</Button>
    </form>
  );
};

export default UserForm;
