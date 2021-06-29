import React, { useState } from "react";

export const InputForm = ({ handle }) => {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (message.length > 0) {
      handle(message);
      setMessage("");
    }
  };
  const handleChange = (e) => {
    console.log(e);
    if (e.key === "Enter" || e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div className="inputForm-container-wrapper">
      <div className="inputForm-container">
        <input
          type="text"
          placeholder="новое сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleChange(e)}
        ></input>
        <button onClick={() => handleClick()}>Добавить</button>
      </div>
    </div>
  );
};
