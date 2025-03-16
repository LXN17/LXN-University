import React, { useState, useRef } from "react";
import Button from "./Button/Button";

const FeedBackSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("help");
  const [disabled, setDisabled] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  function inputHandler(event) {
    const newName = event.target.value;
    setName(newName);
    validateForm(newName, phone);
  }

  function inputPhone(event) {
    const newPhone = event.target.value;
    setPhone(newPhone);
    validateForm(name, newPhone);
  }

  function selectHandler(event) {
    setReason(event.target.value);
  }

  function resetForm() {
    setName("");
    setPhone("");
    setReason("help");
    setDisabled(true);
    setError(false);
  }

  function validateForm(name, phone) {
    const isNameEmpty = name.trim().length === 0;
    const isPhoneEmpty = phone.trim().length === 0;
    setNameError(isNameEmpty);
    setPhoneError(isPhoneEmpty);
    setDisabled(isNameEmpty || isPhoneEmpty);
  }

  function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
      if (event.key === "Enter") {
        setShow(true);
      }
    }

    return (
      <div>
        <h3>Input value: {show && input.current.value}</h3>
        <input
          ref={input}
          className="control"
          type="text"
          name=""
          id=""
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: nameError ? "1px dashed red" : null,
            outline: "none",
          }}
          onChange={inputHandler}
        />
        <label htmlFor="tel">Ваш контактный телефон</label>
        <input
          type="text"
          id="tel"
          className="control"
          value={phone}
          style={{
            border: phoneError ? "1px dashed red" : null,
          }}
          onChange={inputPhone}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={selectHandler}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
      </form>

      <Button
        onClick={() => {
          alert("С Вами свяжутся в ближайшее время");
          resetForm();
        }}
        disabled={disabled}
        isActive={!disabled}
      >
        Отправить
      </Button>
      <StateVsRef />
    </section>
  );
};

export default FeedBackSection;
