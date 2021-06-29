import React, { useEffect, useRef } from "react";
import { InputForm } from "./InputForm";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import "firebase/firestore";

export const Chat = () => {
  const firestore = firebase.firestore();
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("id")
  );
  const myRef = useRef(null);
  const scroll = () => myRef.current.scrollIntoView();

  const sendMessage = (message) => {
    let dateNow = new Date().toLocaleString(); // 19.12.2019, 11:02:48
    firestore.collection("messages").add({
      id: dateNow,
      name: message,
    });
    scroll();
  };

  if (loading) {
    return (
      <div className="chat-isLoading">
        <h1>Скоро загружусь..</h1>
      </div>
    );
  }

  return (
    <div className="chat-container-wrapper">
      <div className="chat-container">
        <div className="chat-list">
          <ul>
            {messages.map((el, index) => {
              return (
                <li key={index}>
                  <div className="list-date">{el.id}</div>
                  <div className="list-message">{el.name}</div>
                </li>
              );
            })}
            <li ref={myRef}></li>
          </ul>
        </div>
        <InputForm handle={sendMessage} />
      </div>
    </div>
  );
};
