import React, { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

const EffectSection = () => {
  const input = useInput();
  const [modal, setModal] = useState();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  function modalHandler() {
    setModal((prev) => !prev);
  }

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={modalHandler}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          accusamus obcaecati nesciunt harum reiciendis ullam nisi dicta iste
          expedita. Ipsam quas porro totam sed molestias sint inventore
          laudantium quidem rem?
        </p>
        <Button onClick={modalHandler}>Закрыть</Button>
      </Modal>
      <h3>Наши сотрудники</h3>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>
                  {user.name} - Почта: {user.email}
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default EffectSection;
