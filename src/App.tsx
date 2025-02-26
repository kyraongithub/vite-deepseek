import styles from "./styles/Home.module.css";
import React, { useState } from "react";
import { MessageProps } from "./types/message.type";
import Message from "./components/Message";

function App() {
  const [messages, setmessages] = useState<MessageProps[]>([
    {
      role: "assistant",
      content: "Hello, bingung pas interview kerja? tanya sini!",
    },
  ]);
  const [input, setinput] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: MessageProps = { role: "user", content: input };
      setmessages((prev) => [...prev, newMessage]);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b",
          messages: [newMessage],
          stream: false,
        }),
      }).then((res) => res.json());

      setmessages((prev) => [
        ...prev,
        { role: "assistant", content: response.message.content },
      ]);
      setinput("");
    }
  };

  return (
    <div className={styles.container}>
      <div className="messages">
        {messages.map((message, index) => (
          <>
            <Message
              key={index}
              role={message.role}
              content={message.content}
            />{" "}
            <br />
            <br />
            <br />
          </>
        ))}
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button disabled={!input.trim()} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
