import { useState } from "react";

import { UserInfo, UserForm } from "./components/user";

import { Container } from "./components/layout";

const App = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "Samar",
      age: "27",
      location: "Tunisia",
      phone: "1234565",
    },

    {
      id: 2,
      name: "Keith",
      age: "24",
      location: "Vanuatu",
      phone: "1234565",
    },
  ]);

  const userList = userData.map((user) => (
    <UserInfo
      key={user.id}
      name={user.name}
      age={user.age}
      location={user.location}
      phone={user.phone}
    />
  ));

  const addUser = (newUser) => {
    newUser.id = Math.floor(Math.random() * 100);
    setUserData([...userData, newUser]);
  };
  return (
    <div>
      <Container>
        <UserForm addUser={addUser} />
      </Container>
      <Container>{userList}</Container>
    </div>
  );
};

export default App;
