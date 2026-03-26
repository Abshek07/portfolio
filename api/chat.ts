import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "bot", text: data.reply },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          background: "#00bcd4",
          color: "#000",
          fontSize: "20px"
        }}
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          width: "300px",
          background: "#111",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px"
        }}>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            {messages.map((m, i) => (
              <p key={i}>
                <b>{m.role === "user" ? "You" : "Bot"}:</b> {m.text}
              </p>
            ))}
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about me..."
            style={{ width: "70%" }}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </>
  );
}
