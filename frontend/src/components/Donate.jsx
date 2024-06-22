import React, { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setDisableBtn(true);
      await axios
        .post(
          "http://localhost:4000/api/v1/checkout",
          {
            name,
            email,
            message,
            amount,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res.data);
          window.location.href = res.data.result.url;
        });
    } catch (error) {
      setDisableBtn(false);
      console.error(error);
    }
  };

  return (
    <section className="donate">
      <form onSubmit={handleCheckout}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Show your love for Poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (USD)"
          />
        </div>
        <input
          type="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `$${amount}` : "$0"}
        </button>
      </form>
    </section>
  );
};

export default Donate;
